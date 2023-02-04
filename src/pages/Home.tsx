import { Outlet, Link } from "react-router-dom";
import {createItem, filterItems, getInitialItems, removeItem, updateItem} from "../feature/todo-list/itemLogic";
import { Item } from "../model/todo-list";
import {useState} from "react";
import Container from '@mui/material/Container';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import ColorChallenge from "../pages/ColorChallenge";
import AddNewTodo from "../components/todo-list/AddNewTodo";
import TodoList from "./TodoList";
import Weather from "./weather";
import Header from "../layout/Header";


export default function Home(): JSX.Element  {
    const [items, setItems] = useState<Item[]>(getInitialItems());
    const [newItemName, setNewItemName] = useState('');

    const add = (name: string) => {
        const item = createItem(name);
        setItems([...items, item]);
    };

    const update = (id: string, updates: any) => {
        setItems(updateItem(items, id, updates));
    };

    const remove = (id: string) => {
        setItems(removeItem(items, id));
    };

    const unpackedItems = filterItems(items, {packed: false});
    const packedItems = filterItems(items, {packed: true});

    const router = createBrowserRouter([
        {
        element: <AddNewTodo newItemName={newItemName} setNewItemName={setNewItemName} addItem={add}/>,
        path: '/'
        },
        {
        element: <TodoList/>,
        path: '/todo-list'
        },  
        {
        element: <Weather/>,
        path: '/weather'
        } ,   
        ])

    return (
        <Container maxWidth='lg'>  
            <RouterProvider router={router}/>
            {/* <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: "80%", padding: 16}}> 
                <Link to={`https://reactrouter.com/en/main/components/link`}>
                    <div style={{border: '2px solid purple', borderRadius: 12, padding: 8, cursor: 'pointer'}}>
                        <h2>
                            📒  Todo List
                        </h2>
                    </div>
                </Link>
                <Outlet />
            </div>
        </div> */}
        </Container>
    )
}

