import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Book from './Book'
import axios from 'axios'
import Form from './Form'
import UpdateForm from './UpdateForm'
import { withAuth0 } from "@auth0/auth0-react";
class MyFavoriteBooks extends React.Component {


  constructor (props){
    super(props);
    this.state = {
      books:[],
      show : false ,
      updatedBookInfo : {},
    }
  }
  
  componentDidMount = async  ()=>{

    console.log('hhhhhhhhhhhhhh')
  let getdata = `${process.env.REACT_APP_SERVER_LINK}/books?email=${this.props.auth0.user.email}`
  let result= await axios.get(getdata)
    await this.setState({
    books : result.data
  })
  
  
 
  console.log(this.state.books)
  }
  
  delete = async (bookID)=>{
let newDelete = await axios.delete(`${process.env.REACT_APP_SERVER_LINK}/deleteBook?bookID=${bookID}&email=${this.props.auth0.user.email}`)
  
this.setState({
  books:newDelete.data
})


}

showUpdateForm=  (bookInfo)=>{

   this.setState({
  show : true ,
  updatedBookInfo : bookInfo,
})
}


updateInfoo = async (e)=>{
e.preventDefault();
let bookData ={
  title : e.target.title.value,
  description:e.target.description.value,
  status:e.target.status.value,
  email:e.target.email.value,
  bookID : this.state.updatedBookInfo._id
}
let newInfo = await axios.put(`${process.env.REACT_APP_SERVER_LINK}/update`,bookData)

this.setState({
  show : true ,
  updatedBookInfo : newInfo.data,
})



}







  createBook = async (e)=>{
    e.preventDefault();
        let bookData = {
      title : e.target.title.value,
      description : e.target.description.value,
      status : e.target.status.value,
      email : this.props.auth0.user.email,
    }
    let addBook = await axios.post( `${process.env.REACT_APP_SERVER_LINK}/addBook`,bookData)
  


    this.setState({
      books:addBook.data
    })
  }


  render() {
    
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
          

          {this.state.books.map((element,index)=>{
            
            return(<Book book={element } key={index} delete={this.delete} update = {this.showUpdateForm}/>)
            
          })}

           <Form createBook={this.createBook}/>
           {this.state.show && 
           <UpdateForm bookInfo={this.state.updatedBookInfo}
             updateInfoo = {this.updateInfoo}
           />
         
           
           
           }
         
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
