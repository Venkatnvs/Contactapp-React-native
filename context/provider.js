import React,{createContext, useReducer} from 'react';
import authStates from './initialStates/authStates';
import contactsStates from './initialStates/contactsStates';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) =>{
    const [authState, authDispatch] = useReducer(auth, authStates);
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsStates);

    return <GlobalContext.Provider value={{authState,contactsState,authDispatch,contactsDispatch}}>{children}</GlobalContext.Provider>
};

export default GlobalProvider;