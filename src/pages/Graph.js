import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Store';
import ReactFlow from 'react-flow-renderer';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InfoBox from '../component/InfoBox';

const orderby = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", "status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel", "rating", "on_rating", "support", "on_support"]

const newOrder = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", [["status", "on_status"], ["track", "on_track"], ["update", "on_update"], ["cancel", "on_cancel"], ["rating", "on_rating"], ["support", "on_support"]]]

const greenClr = ["on_search", "search"];
const blueClr = ["select", "on_select", "init", "on_init", "confirm", "on_confirm"];
const redClr = ["status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel"];
const grayClr = ["rating", "on_rating", "support", "on_support"];

export default function Graph() {
    let history = useHistory();
    const [state] = useContext(Context);
    const [graphData, setgraphData] = useState([]);

    const makeDataForAlgo = () => {
        var crrData = { ...state.apiFilterData }
        var newData = {};
        orderby.forEach(item => {
            newData[item] = [];
            crrData[item].forEach(item2 => {
                var strCr = ''
                item2.forEach(item3 => {
                    if (item3.checked) {
                        strCr = strCr + item3.name + ', '
                    }
                })
                if (strCr !== '') newData[item].push(strCr);
            })
        })
        xgenerateGraphData(newData);
        // setalgoData(newData);
    }

    useEffect(() => {
        makeDataForAlgo();
    }, []);


    const colorClass = (item) => {
        if (greenClr.indexOf(item) >= 0) {
            return 'green-clr';
        } else if (blueClr.indexOf(item) >= 0) {
            return 'blue-clr';
        } else if (redClr.indexOf(item) >= 0) {
            return 'red-clr';
        } else if (grayClr.indexOf(item) >= 0) {
            return 'gray-clr';
        }
        return '';
    }

    const xgenerateGraphData = (data) => {
        var gDataArr = [];
        var i = 0;
        var j = 0;
        var x = 100;
        var y = 5
        var prIdArr = [];
        var newIdArr = [];
        for (const item of newOrder) {
            if (Array.isArray(item)) {
                var x1 = x;
                var y1 = y + 200;
                var cpId = [];
                item.forEach(aItem => {
                    if (data[aItem[0]].length > 0) {
                        data[aItem[0]].forEach((label) => {
                            i++;
                            gDataArr.push({
                                id: i, className: colorClass(aItem[0]), data: {
                                    label: <div><div className="label-head"><b className='box-id-text'>{i}</b><b>{aItem[0]
                                    }</b></div><div>{label}</div></div>
                                }, position: { x: x, y: y }
                            });
                            cpId.push(i);
                            x += 300;
                            if (prIdArr.length > 0) {
                                prIdArr.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                                })
                            }
                        })
                    }
                    if (data[aItem[1]].length > 0) {
                        data[aItem[1]].forEach((label) => {
                            i++;
                            gDataArr.push({
                                id: i, className: colorClass(aItem[1]), data: {
                                    label: <div><div className="label-head"><b className='box-id-text'>{i}</b><b>{aItem[1]
                                    }</b></div><div>{label}</div></div>
                                }, position: { x: x1, y: y1 }
                            });
                            x1 += 300;
                            if (cpId.length > 0) {
                                cpId.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                                })
                            } else {
                                prIdArr.forEach(pId => {
                                    j++;
                                    gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                                })
                            }

                        })
                    }
                    cpId = [];
                })

            }
            else if (data[item].length > 0) {
                // create nodes 
                // <b className="close-end" onClick={() => closeAction(i)}>X</b>
                newIdArr = [];
                data[item].forEach((label) => {
                    i++;
                    gDataArr.push({ id: i, className: colorClass(item), data: { label: <div><div className="label-head"><b className='box-id-text'>{i}</b><b>{item}</b></div><div>{label}</div></div> }, position: { x: x, y: y } });
                    newIdArr.push(i);
                    x += 300;
                    if (prIdArr.length > 0) {
                        prIdArr.forEach(pId => {
                            j++;
                            gDataArr.push({ id: 'e1-' + j, source: pId, target: i, arrowHeadType: 'arrow' })
                        })
                    }
                })
                // match nodes 
                prIdArr = newIdArr;

                x = 100;
                y += 150;
            }
        }

        setgraphData(gDataArr);
    }

    const closeAction = (a) => {
        console.log(a);
    }

    const downloadPdf = () => {
        const input = document.getElementById('graph');
        html2canvas(input)
            .then((canvas) => {
                debugger
                const imgData = canvas.toDataURL('image/png');
                var width = canvas.width;
                var height = canvas.height;
                var millimeters = {};
                millimeters.width = Math.floor(width * 0.264583);
                millimeters.height = Math.floor(height * 0.264583);
                const pdf = new jsPDF("l", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, millimeters.width, millimeters.height);
                // pdf.output('dataurlnewwindow');
                pdf.save("Beckn.pdf");
            })
            ;
    }

    return (
        <div>
            <div className="button-container">
                <Button variant="outlined" onClick={() => history.push('/')}>home</Button>
                <Button variant="outlined" style={{ marginLeft: '10px' }} onClick={downloadPdf}>export</Button>
                <div className="step-graph">Step 22 of 22</div>
            </div>

            <div className="g-main">
                <div className='graph-info'>
                    <InfoBox keyName='graph' />
                </div>
            </div>

            <div id='graph' className="graph">
                <ReactFlow elements={graphData} />
            </div>
        </div>
    )
}
