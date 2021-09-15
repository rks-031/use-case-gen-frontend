import React, { useContext } from 'react';
import logo from '../icons/beckn-logo.svg';
import { Context } from '../Store'

export default function Header() {
    const [state, setstate] = useContext(Context);
    return (
        <div className="header">
             <img className="b-logo" src={logo} alt="React Logo" />
             <div className='user-details'>
                 <div className="b-padding"><b>Name: </b></div>
                 <div className="b-padding"><b>Organisation Name: </b></div>
                 <div><b>Role in the Retail network: </b></div>
             </div>
        </div>
    )
}
