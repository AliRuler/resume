import Grid from "@mui/material/Grid";
import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";

import Title from "../weather/Title";

interface AddNewTodoProps {
  newItemName: string;
  setNewItemName: React.Dispatch<React.SetStateAction<string>>;
  addItem: (name: string) => void;
}

export default function AddNewTodo({
  newItemName,
  setNewItemName,
  addItem,
}: AddNewTodoProps): JSX.Element {
  return (
    <>
      <Title value={"ADD TODO"} />
      <Grid style={{ border: "2px solid #fff", padding: 8, borderRadius: 2 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <form
                style={{ display: "flex", justifyContent: "center", gap: 8 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  addItem(newItemName);
                  setNewItemName("");
                }}
              >
                <TextField
                  value={newItemName}
                  onChange={(event) => setNewItemName(event.target.value)}
                  placeholder={"new todo ..."}
                  id="filled-basic"
                  label="Filled"
                  variant="filled"
                />
                <button
                  type={"submit"}
                  style={{
                    backgroundColor: "#202020",
                    color: "white",
                    padding: "8px 24px",
                    borderRadius: 4,
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>
            </CardContent>
          </React.Fragment>
        </Card>
      </Grid>
    </>
  );
}
