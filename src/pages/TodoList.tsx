import {useState} from "react";
import {createItem, filterItems, getInitialItems, removeItem, updateItem} from "../feature/todo-list/itemLogic";
import AddNewTodo from "../components/todo-list/AddNewTodo";
import ListItems from "../components/todo-list/ListItems";
import { Item } from "../model/todo-list";

import Container from '@mui/material/Container';

import Title from "../components/weather/Title"


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
            <Title value={"Todo"}/>
            <ListItems title={''} items={packedItems} update={update} remove={remove}/>
            <Title value={"Not todo"}/>
            <ListItems title={''} items={unpackedItems} update={update} remove={remove}/>
        </>
    )
}

export default TodoList