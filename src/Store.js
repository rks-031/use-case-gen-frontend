import React, { useState } from "react";

const initialState = {
    apiFilterData:{},
    checkedData:{},
    userInfo:{
        user:'',
        name_org: '',
        name_role_timestamp: ''
    }
}

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
        <Context.Provider value={[state,setState]}>{children}</Context.Provider>
    )
}

export default Store;