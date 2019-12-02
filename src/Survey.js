import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { auth, db } from "./firebase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./styles.css";

export default function Survey(props) {
  const [name, setName] = useState("");
  const [classchoice, setClass] = useState("");
  const [contactemail, setContactemail] = useState("");

  const handleSave = () => {
    db.collection("users")
      .doc(props.user.uid)
      .collection("surveys")
      .add({name: name, classchoice: classchoice, contactemail: contactemail})
      .then(() => {
        props.history.push("/app/profile/");
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper style={{ padding: 30, width: 400, marginTop: 30 }}>
        <Typography>Please enter the following information:</Typography>
        <Typography style={{ marginTop: 40 }}>Name</Typography>
        <TextField
          fullWidth
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <Typography style={{ marginTop: 20 }}>
          What class would you like help with?
        </Typography>
        <TextField
          fullWidth
          value={classchoice}
          onChange={e => {
            setClass(e.target.value);
          }}
        />
        <Typography style={{ marginTop: 20 }}>E-mail address</Typography>
        <TextField
          fullWidth
          value={contactemail}
          onChange={e => {
            setContactemail(e.target.value);
          }}
        />
        <Typography style={{ marginTop: 20 }}>Phone Number</Typography>
        <TextField
          fullWidth
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: 20 }}
          onClick={handleSave}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
}
