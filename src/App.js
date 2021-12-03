
import './App.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import Todos from './Todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

const element = <FontAwesomeIcon icon={faCoffee} />


function App() {

  const [toDoItemFlag, setToDoItemFlag] = useState(false);
  const [toDoItem, setToDoItem] = useState("");
//  const [toDoItems, setToDoItem] = useState([]);


  const onToDoSubmitted = (event) => {
    setToDoItem(event.target.value);
  };


  const OnToDoSend = () => {
    setToDoItemFlag(true);
    
  };



  return (

    <Container className="App">
      <Row>
        <Col>
          <h1>To Do App</h1>
        </Col>
      </Row>

      <Row className="my-5">
        <Col>
          <Form.Label>To Do Enter</Form.Label>
        </Col>
        <Col>
          <Form.Control

            type="email"
            placeholder="Plaase type an item  to do..."
            onChange={(e)=>onToDoSubmitted(e)} />

        </Col>
        <Col>
          <Button variant="info" type="submit" onClick={OnToDoSend}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "#FFF" }} />
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Todos toDoItemFlag={toDoItemFlag} toDoItem={toDoItem} />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
