import Grid from "@mui/material/Grid";
import { Item } from "../../model/todo-list";
import ItemBox from "./Item";

interface ListItemsProps {
    title: string,
    items: Item[]
    update: (id: string, updates: any) => void,
    remove: (id: string) => void
}

interface EmptyStateProps {
    id: string
}

const EmptyState = ({id}: EmptyStateProps) => (
    <p id={id} className="text-primary-400">
        (No items.)
    </p>
);

const ListItems = ({items, title, remove, update}: ListItemsProps): JSX.Element => {
    const isEmpty = !items.length;
    return (
        <Grid container style={{border: '2px solid #fff', padding: 8, borderRadius: 2}}>
            
            <h1 style={{margin:6 ,textAlign:"center", width:"100%"}}>
                {title}
            </h1>
                {items.map((item: any) => (
                    <Grid sx={{margin:1,boxShadow:'0px 0px 5px #fff'}} item xs={2.8}>
                        <ItemBox key={item.id} item={item} update={update} remove={remove}/>
                    </Grid>
                ))}
        </Grid>
    )
}

export default ListItems