import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./styles.css";

export default function Static(props) {
  return (
    <div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 400,
            marginTop: 100,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6" style={{ marginTop: 20, marginBottom: 20 }}>
            BYU Personal Tutoring Services
          </Typography>
          <Typography>
            One-on-one tutoring services provided for BYU students for Economics
            110, Principles of Statistics 121, Finance 201, Math 110, Math 112
            (Calculus), Finite Mathematics 118, Economics 380, & Economics 382.
          </Typography>
        </Paper>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 400,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6">Meet Taylor</Typography>
          <Typography>
            Information about Taylor (Classes, Major, Brief Resume) Economics
            Major, Senior with a Strategic Management Minor and Statistics
            Minor. Past intern at Booz Allen Hamilton (Summer Intern), Qualtrics
            (Data Quality Analyst), Utah Department of Transportation (Business
            Analyst Intern), Peak Capital (Real Estate Private Equity Intern),
            and on campus club involvement.
          </Typography>
        </Paper>
        <div />
        <Card
          style={{
            padding: 30,
            width: 400,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <CardActionArea>
            <CardMedia image="taylorpic" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Taylor Jensen
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 400,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6">Past Reviews</Typography>
          <Typography>
            5/5 stars for 5 past students. Would recommend from each. 2/5 had
            over 10 tutoring sessions, repeat requests for meetings.
          </Typography>
        </Paper>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 400,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          <Typography variant="h6">Rate/hour</Typography>
          <Typography>$30 per hour</Typography>
        </Paper>
      </div>
      <div>
        <Paper
          style={{
            padding: 30,
            width: 400,
            marginTop: 30,
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 100
          }}
        >
          <Typography variant="h6">Get in Touch/ Sign In</Typography>
          <Typography />
        </Paper>
      </div>
    </div>
  );
}

//* export function taylorpic(props) {
//* return <img src="TaylorAppPhoto.JPG" alt="" />;}
//* <div>img src="TaylorAppPhoto.JPG" alt="" /></div>;
