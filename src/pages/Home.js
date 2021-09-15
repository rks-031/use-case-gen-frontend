import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../Store'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import InfoBox from '../component/InfoBox';

export default function Home() {
    let history = useHistory();
    const [state, setstate] = useContext(Context);
    const [error, seterror] = useState(false)

    useEffect(() => {
        getApiData()
    }, []);


    const handleChange = (event) => {
        console.log(event.target.name);
        setstate({ ...state, userInfo: { ...state.userInfo, [event.target.name]: event.target.value } });
    };

    const onButtonClick = () => {
        if (state.userInfo.user && state.userInfo.name_org && state.userInfo.name_role_timestamp) {
            seterror(false);
            history.push('/search');
        } else {
            seterror(true);
        }
    }

    const getApiData = () => {
        fetch('http://13.235.139.60:3000/action/')
            .then(response => response.json())
            .then(data => groupBy(data));
    }

    const groupBy = (list) => {
        const newData = {};
        list.forEach((item) => {
            if (newData[item.api]) {
                newData[item.api].push(item.label);
            } else {
                newData[item.api] = [item.label];
                state.checkedData[item.api] = []
                setstate({...state,checkedData:{...state.checkedData}});
            }
        });
        setstate({...state,apiFilterData:newData});
        return newData;
    }

    return (
        <div className="home">
            <Card className="user-info-card">
                <h2 className='card-head'>User Details</h2>
                <TextField id="standard-basic" className="input-width" name="user" value={state.userInfo.user} label="Name" onChange={handleChange} />
                <TextField id="standard-basic" className="input-width" name="name_org" value={state.userInfo.name_org} label="Organisation Name" onChange={handleChange} />
                <FormControl className="input-width">
                    <InputLabel id="demo-simple-select-label">Role in the Retail network</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.userInfo.name_role_timestamp}
                        name="name_role_timestamp"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Retail BAP</MenuItem>
                        <MenuItem value={20}>Retail BPP</MenuItem>
                    </Select>
                </FormControl>
                <Button className="home-btn" variant="outlined" onClick={onButtonClick} >
                    proceed
                </Button>
                {error ? <div className="error-text">All Fields Are Mandatory</div> : ''}
            </Card> 
            <InfoBox keyName='home'/>
        </div>
    )
}
