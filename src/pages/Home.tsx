import { Outlet, Link } from "react-router-dom";
import {
  createItem,
  filterItems,
  getInitialItems,
  removeItem,
  updateItem,
} from "../feature/todo-list/itemLogic";
import { Item } from "../model/todo-list";
import { useState } from "react";
import Container from "@mui/material/Container";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ColorChallenge from "../pages/ColorChallenge";
import AddNewTodo from "../components/todo-list/AddNewTodo";
import TodoList from "./TodoList";
import Weather from "./weather";
import Header from "../layout/Header";

import SinglePage from "./singlePage";

import NewContact from "./Contacts/ShowContact";
import ShowContact from "./Contacts/ShowContact";
import Register from "./Contacts/Register/Register";
import Home2 from "./Home/Home";
import {Layout} from "../components/Layout";

export default function Home(): JSX.Element {
  const [items, setItems] = useState<Item[]>(getInitialItems());
  const [newItemName, setNewItemName] = useState("");

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

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  const router = createBrowserRouter([
    {
      element: (
        <AddNewTodo
          newItemName={newItemName}
          setNewItemName={setNewItemName}
          addItem={add}
        />
      ),
      path: "/",
    },
    // {
    //   path: "/",
    //   element: <Layout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Home />,
    //     },
    //     {
    //       path: "Register",
    //       element: <Register />,
    //     },
    //     {
    //       path: "/:Namecontact",
    //       element: <ShowContact />,
    //     },
    //   ],
    // },
    {
      element: <TodoList />,
      path: "/todo-list",
    },
    {
      element: <Weather />,
      path: "/weather",
    },
    {
      path: "weather/:city",
      element: <SinglePage />,
    },
  ]);

  return (
    <Container maxWidth="lg">
      <RouterProvider router={router} />
    </Container>
  );
}
