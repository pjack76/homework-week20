import React from "react";
import { Card } from 'react-bootstrap';
import Container from "../../components/Container";
import "./portfolio.css";



function Portfolio() {
  
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Card.Header className="card-head"><h3><b>Portfolio</b></h3>
        <Card className ="entire-card" id = "top-card">
          <Card.Body className="card-body">
            <Card.Title>
              <Card.Link href = "https://jepps2020.github.io/Project_1GWU/" target = "_blank">Project 1</Card.Link>
              <Card.Link href = "https://github.com/JEpps2020/Project_1GWU" target = "_blank">GitHub Repository</Card.Link>
            </Card.Title>
              <Card.Text>
                This app allows those who are interested in birds to learn how different bird species sighted in their vincinities look and how they sound.
              </Card.Text>
          </Card.Body>
        </Card>

        <Card className ="entire-card">
          <Card.Body className="card-body">
            <Card.Title>
              <Card.Link href = "https://shrouded-garden-01530.herokuapp.com/" target = "_blank">Eat-Da-Burger</Card.Link>
              <Card.Link href = "https://github.com/pjack76/burger" target = "_blank">GitHub Repository</Card.Link>
            </Card.Title>
            <Card.Text>
              This app allows the users to enter new burgers to be stored in a database. A button next to each burger name can be clicked to move
              the burger to the side of the page. On the right side of the page, hover the cursor near the name of each burger to click on a button
              to remove the burger from the database.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className ="entire-card">
          <Card.Body className="card-body">
            <Card.Title>
              <Card.Link href = "https://lit-ocean-92189.herokuapp.com/" target = "_blank">Project 2</Card.Link>
              <Card.Link href = "https://github.com/amsgwbootcamp/GroceryStore" target = "_blank">GitHub Repository</Card.Link>
            </Card.Title>
            <Card.Text>
              This app allows the users to register and/or log in to do grocery shopping during this pandemic time.
              The user can shop from a variety of food categories.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className ="entire-card">
          <Card.Body className="card-body">
            <Card.Title>
              <Card.Link href = "https://enigmatic-mesa-23861.herokuapp.com/" target = "_blank">Budget Tracker</Card.Link>
              <Card.Link href = "https://github.com/pjack76/homework-week18" target = "_blank">GitHub Repository</Card.Link>
            </Card.Title>
            <Card.Text>
              This app allows the users to keep tract of their budgets.  If the user is traveling and has no realiable internet connection, 
              the app allows the user to still do transaction even offline. Data from offline transactions will be stored locally on the user's
              device.  These offline transactions will then be persisted to the database once internet connection is again available.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className ="entire-card">
          <Card.Body className="card-body">
            <Card.Title>
              <Card.Link href = "https://fast-headland-44655.herokuapp.com/" target = "_blank">React Table of Employees</Card.Link>
              <Card.Link href = "https://github.com/pjack76/react-homework-19" target = "_blank">GitHub Repository</Card.Link>
            </Card.Title>
            <Card.Text>
              This app uses the React Framework.  It allows the users to send in data about employees using json array to generate a table. The table currently has two functinalies.
              It allows the users to sort employees by last names.  It also filters employees by titles.
            </Card.Text>
          </Card.Body>
        </Card>
      </Card.Header>
    </Container>
  );
}

export default Portfolio;
