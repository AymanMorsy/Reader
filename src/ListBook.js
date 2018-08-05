import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf'



class ListBook extends Component {

render() { 
    return(
    <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
              <Shelf 
              category ='currentlyReading' 
              title ='Currently Reading'        
              />
              <Shelf 
              category ='wantToRead' 
              title ='Want to Read'              
              />
              <Shelf 
              category ='read' 
              title ='Read'             
              />
          </div>
        </div>
        <div className="open-search">
            <Link to ='/search'>Add a book</Link>
        </div>
      </div>
        
        );
    }
}
 
export default ListBook;


