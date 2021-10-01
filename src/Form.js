import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

class form extends React.Component{
render(){
    return(<Form onSubmit={this.props.createBook}  >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' placeholder="Enter Title" />
      
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name='description' placeholder="Enter Description" />
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" name='status' placeholder="Enter Status" />
      

        <input type="submit" value="Add Book" />
        
    </Form.Group>
</Form>
)
}
    
}

export default form