import React from 'react'
import Card from 'react-bootstrap/Card';
import ProductModal from './ProductModal';

export default function MyCard(props) {
    console.log(props.data)
  return (
    <div className="col-3">
        <Card >
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.data.phone}</Card.Subtitle>
        <Card.Text>
          street - {props.data.address.street} , suite no {props.data.address.suite} , {props.data.address.city} , {props.data.address.zipcode}
        </Card.Text>
          <ProductModal data={props.data}/>
      </Card.Body>
    </Card>
    </div> 
     )
}
