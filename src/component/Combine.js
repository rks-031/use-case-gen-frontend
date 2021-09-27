import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { ListItem, Typography } from '@material-ui/core';
var find = require("lodash").find
var filter = require("lodash").filter

const order_by = ["search", "on_search", "select", "on_select", "init", "on_init", "confirm", "on_confirm", "status", "on_status", "track", "on_track", "update", "on_update", "cancel", "on_cancel", "rating", "on_rating", "support", "on_support"]
const createRowText = (row) => {
    const use_cases = []
    for (const item in row) {
        const action = row[item].split(' ')[0]
        use_cases[action] = row[item].split(' ').slice(1).join(' ')
    }
    var row_text = ''
    for (const item of order_by) {
        if (use_cases[item] !== undefined) {
            row_text = row_text + use_cases[item]
        }
        row_text = row_text + '\t'
    }
    return row_text;
}

function traverse(node, response, path = [], result = []) {
    if (!node.children.length)
        result.push(path.concat(`${node.call} ${node.label}`))
    for (const child of node.children) {
        var child_obj = find(response.use_cases, { id: child })
        traverse(child_obj, response, path.concat(`${node.call} ${node.label}`), result)
    }
    return result;
}

const construct_tree = (response) => {
    var use_cases = response.use_cases
    var roots = filter(response.use_cases, function (o) {
        return !o.parents.length
    })
    var tree = []
    for (var root of roots) {
        tree = tree.concat(traverse(root, response))
    }
    console.log(`${response.participant_name} ${response.organisation_name} ${response.role_in_network}`)
    console.log(`${tree.length} paths found. Creating csv...`)
    var csv_text = ''; //'participant_details \t' + order_by.join('\t')
    for (var row of tree) {
        csv_text = csv_text + `\n${response.participant_name}_${response.organisation_name}_${response.role_in_network}\t` + createRowText(row)
    }
    console.log(`Processed`)
    return csv_text;
}


export default function Combine() {

    const [selectedFiles, setFiles] = useState([]);

    const uploadFile = (e) => {
        let file = e.target.files[0];
        if (file) {
            setFiles([...selectedFiles, file])
        }
    }


    const downloadJson = async () => {
        if (selectedFiles.length > 0) {
            var data = 'participant_details \t' + order_by.join('\t')
            for (var file of selectedFiles) {
                let t = await file.text()
                data = data + construct_tree(JSON.parse(t)) + '\n'
            }
            console.log(`Exporting`)
            data = "data:text/csv;charset=utf-8," + data;
            var link = document.createElement('a');
            link.download = 'combined.csv';
            link.href = data;
            console.log(`Exported`)
            link.click();
        }
    }
    return (
        <div>
            <label htmlFor="btn-upload">
                <input
                    id="btn-upload"
                    name="btn-upload"
                    accept=".json"
                    style={{ display: 'none' }}
                    type="file"
                    onChange={uploadFile} />
                <Button
                    className="btn-choose"
                    variant="outlined"
                    component="span" >
                    Choose Files
                </Button>
            </label>
            <Typography style={{ marginTop: '10px' }} variant="h6" className="list-header">
                List of Files
            </Typography>
            <ul className="list-group">
                {selectedFiles.length > 0 &&
                    selectedFiles.map((file, index) => (
                        <ListItem
                            divider
                            key={index}>
                            <span>{file.name}</span>
                        </ListItem>
                    ))}
            </ul>

            <Button variant="outlined" onClick={downloadJson}>Convert to Csv
            </Button>
        </div>
    )
}
