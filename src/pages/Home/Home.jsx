import {React} from 'react';
import Table from '../../components/Table/Table'  // new
import {columns} from "../../db"
// import { ContactsContext } from '../../context/contacts/contactsProvider';
import { useSelector, useDispatch } from "react-redux";

const Home2 = () => {
    // const { contacts, dispatch } = useContext(ContactsContext);
    const contacts = useSelector((state) => {
      return state.contacts;
    });
    const dispatch = useDispatch();
    
  return (
    <div className='container mx-auto'>
        <Table columns={columns} data={contacts} dispach={dispatch} />
    </div>
  )
}
export default Home2