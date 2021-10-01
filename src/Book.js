import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';



class book extends React.Component{

 deletee= ()=>{
  this.props.delete(this.props.book._id)
}

update = ()=>{
  this.props.update(this.props.book)
}

render() {
 
    console.log(this.props.book)
    return(

        <>
        <Card>
          <Card.Header>Book</Card.Header>
          <Card.Body>
            <Card.Title>Title : {this.props.book.title} </Card.Title>
            <Card.Title>Email: {this.props.book.email} </Card.Title>
            <Card.Text>
              Description : {this.props.book.description}
            </Card.Text>
            <Card.Text>
              Status : {this.props.book.status}
            </Card.Text>
            <Button onClick={this.deletee}> Delete </Button>
            <Button onClick={this.update} > Update </Button>
          </Card.Body>
          
          
        </Card>         
      </>

        
    )
}



}
  export default book