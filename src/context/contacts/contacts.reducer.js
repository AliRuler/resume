function ContactsReducer(state,action){
    const {type, payload} = action;
    switch(type){
        case contactsAction.Add:{
            // const [item,index] = state.find(p => p.name === payload.name);
            // if (item){
            //     throw new Error ("This Contat is Already exist");
            // }
            // else{
                return(state = [...state,payload]);
            // }
        }
        case contactsAction.Edit:{
            return(state.map(item => item.name === payload.name? payload: item));

        }
        case contactsAction.Remove:{
            return(state.filter(item => item.name !== payload));
        }
        default: throw new Error("This action is not define");
    }

};
const contactsAction = {
    Add: "ADD_CONTACTS_ITEM",
    Remove: "REMOVE_CONTACTS_ITEM",
    Edit: "EDIT_CONTACTS_ITEM",
};

export {contactsAction,ContactsReducer}