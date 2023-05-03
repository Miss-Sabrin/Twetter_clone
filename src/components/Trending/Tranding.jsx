import React from 'react'
import {Card, ListGroup, InputGroup, Form, Button} from 'react-bootstrap'

const Tranding = () => {
  return (
    <div style={{padding: '30px'}}>
      <InputGroup className='mb-3'>
        <Form.Control placeholder='"search twitter'  aria-aria-label='Reciption username' aria-describedby='basic-addon2'/>
        <button variant='outline-secondary' id='button-addon2'> Search</button>
      </InputGroup>
      <Card>
        <Card.Body>
          <Card.Title>what's heppening</Card.Title>
          <ListGroup style={{border:'none' , fontWeight:'bold'}}>
            <ListGroup.Item style={{border:'none'}}> cars justo adio</ListGroup.Item>
            <ListGroup.Item style={{border:'none'}}> cars justo adio</ListGroup.Item>
            <ListGroup.Item style={{border:'none'}}> cars justo adio</ListGroup.Item>
            <ListGroup.Item style={{border:'none'}}> cars justo adio</ListGroup.Item>
            <ListGroup.Item style={{border:'none'}}> cars justo adio</ListGroup.Item>

          
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Tranding