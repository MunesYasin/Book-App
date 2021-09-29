import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';




class book extends React.Component{



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
              Status : {this.props.book.statu}
            </Card.Text>
         
          </Card.Body>
          
          
        </Card>         
      </>

        
    )
}



}
  export default book