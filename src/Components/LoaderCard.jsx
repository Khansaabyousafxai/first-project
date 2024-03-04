import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import React from 'react'

export default function LoaderCard() {
  return (
    <div className="col-md-3">
         <Card >
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <div className="d-flex justify-content-around">
          <Placeholder.Button variant="primary" xs={6} />
          <Placeholder.Button variant="primary" xs={6} />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
