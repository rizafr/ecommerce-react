"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BooksForm extends React.Component{
  render(){
    return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              ref="Title" />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Description"
              ref="Description" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Price"
              ref="Price" />
          </FormGroup>
          <Button bsStyle="primary">Save Book</Button>
        </Panel>
      </Well>
    )
  }
}
export default BooksForm;
