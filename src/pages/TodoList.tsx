import {useState} from "react";
import {createItem, filterItems, getInitialItems, removeItem, updateItem} from "../feature/todo-list/itemLogic";
import AddNewTodo from "../components/todo-list/AddNewTodo";
import ListItems from "../components/todo-list/ListItems";
import { Item } from "../model/todo-list";

import Container from '@mui/material/Container';

import {Link} from "react-router-dom";
import {Button} from "@mui/material";


const TodoList = (): JSX.Element => {
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

    return (
        <>
            <Link to={`/weather/`}>
                <Button sx={{bgcolor:'common.white'}}>
                    {'مشاهده 4 روز آینده'}
                </Button>
            </Link>
            <ListItems title={'packed Items'} items={packedItems} update={update} remove={remove}/>
            <ListItems title={'unpacked Items'} items={unpackedItems} update={update} remove={remove}/>
        </>
    )
}

export default TodoList