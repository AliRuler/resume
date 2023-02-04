import { useState } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import Checkbox from '@mui/material/Checkbox';

interface ItemProps {
  item: any;
  update: (id: string, updates: any) => void;
  remove: (id: string) => void;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Item({ item, update, remove }: ItemProps) {
  const [editing, setEditing] = useState(false);
  return (
    <Card sx={{border:"none"}} variant="outlined">
      <React.Fragment>
        <CardContent>
          <Typography
            sx={{ margin: 2, textAlign: "center" }}
            variant="h5"
            component="div"
          >
            <label htmlFor={`toggle-${item.id}`}>{item.name}</label>
          </Typography>
          <Typography sx={{ margin: 2, textAlign: "center" }} variant="body2">
              <TextField
                disabled={!editing}
                value={item.name}
                id={`edit-${item.id}`}
                onChange={(event) =>
                  update(item.id, { name: event.target.value })
                }
              />
          </Typography>
        </CardContent>
        <CardActions sx={{ margin: 2, textAlign: "center" }}>
          <Button startIcon={editing ? <SaveIcon/>  :<EditIcon /> }
            aria-label={`Edit "${item.name}"`}
            onClick={() => setEditing(!editing)}
            variant="contained"
          >
            {" "}
            {editing ? "Save" : "Edit"}
          </Button>
          <Button aria-label={`Remove "${item.name}"`}
                  onClick={() => remove(item.id)} variant="contained" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Checkbox 
                className="focus:bg-red-500"
                checked={item.packed}
                id={`toggle-${item.id}`}
                onChange={() => update(item.id, { packed: !item.packed })}
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 46 } }}
      />
        </CardActions>
      </React.Fragment>
    </Card>
  );
};




