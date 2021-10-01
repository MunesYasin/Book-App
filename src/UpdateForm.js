import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

class form extends React.Component{
render(){
    return(<Form onSubmit={this.props.updateInfoo}  >
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' defaultValue={this.props.bookInfo.title} />
      
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name='description' defaultValue={this.props.bookInfo.description} />
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" name='status' defaultValue={this.props.bookInfo.status} />
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name='email' defaultValue={this.props.bookInfo.email} />
      
      
        <input type="submit" value="Update Book" />
        
    </Form.Group>
</Form>
)
}
    
}

export default form