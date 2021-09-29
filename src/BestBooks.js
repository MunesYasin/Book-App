import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Book from './Book'
import axios from 'axios'

class MyFavoriteBooks extends React.Component {


  constructor (props){
    super(props);
    this.state = {
      books:[]
    }
  }
  
  componentDidMount = async  ()=>{
    console.log('hhhhhhhhhhhhhh')
  let getdata = `${process.env.REACT_APP_SERVER_LINK}/books?email=m2nesyasin@outlook.com`
  let result= await axios.get(getdata)
    await this.setState({
    books : result.data
  })
  
  
 
  console.log(this.state.books)
  }
  


  render() {
    
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
          

          {this.state.books.map((element,index)=>{
            
            return(    <Book book={element } key={index} />)
            
          })}
      
         
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
