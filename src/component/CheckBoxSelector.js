import React, { useContext, useState } from 'react';
import { Context } from '../Store'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ConstantData from '../ConstantData';
import Card from '@material-ui/core/Card';
import InfoBox from './InfoBox';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function CheckBoxSelector(props) {
    let history = useHistory();
    const [state, setstate] = useContext(Context);
    const [selected, setselected] = useState(state.checkedData[props.keyName]);
    console.log(props);
    const handleChange = (event) => {
        if (event.target.checked) {
            setselected([...selected, event.target.name]);
        } else {
            selected.splice(selected.indexOf(event.target.name), 1);
            setselected([...selected]);
        }
    }


    const CheckBoxs = () => {
        console.log(state.apiFilterData[props.keyName]);
        return state.apiFilterData[props.keyName].map(item => {
            return <FormControlLabel
                key={item}
                control={
                    <Checkbox
                        checked={selected.indexOf(item) >= 0}
                        onChange={handleChange}
                        name={item}
                        color="primary"
                    />
                }
                label={item}
            />
        })
    }


    const nextClick = () => {
        console.log(selected);
        setstate({...state,checkedData:{...state.checkedData,[props.keyName]:[...selected]}});
        history.push(`/${ConstantData.urlPath[props.keyName].next}`);
    }

    const backClick = () => {
        setstate({...state,checkedData:{...state.checkedData,[props.keyName]:[...selected]}});
        history.goBack();

    }



    return (
        <div className="check-box-compo">
            <Card className="check-box-card ">
                <h2 className="text-color x-ccenter">{props.keyName}</h2>
                {CheckBoxs()}
                <div className='button-container-check'>
                    <Button className="home-btn" variant="outlined" onClick={backClick} >
                        back
                    </Button>
                    <Button className="home-btn" variant="outlined" onClick={nextClick} >
                        next
                    </Button>
                </div>
            </Card>
            <InfoBox keyName={props.keyName} />
        </div>
    )
}
