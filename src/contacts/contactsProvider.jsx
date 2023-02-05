import React from "react";
import { ContactsReducer } from "./contacts.reducer";
import {getData} from "../../db";

export const ContactsContext = React.createContext({
    contacts:[],
    dispatch:()=>{},
});

const ContactsProvider = ({children}) =>{
    const [contacts,dispatch] = React.useReducer(ContactsReducer,getData);
    return(
        <ContactsContext.Provider value={{
            contacts,
            dispatch,
        }}>
         {children}
        </ContactsContext.Provider>
    )
}

export default ContactsProvider;