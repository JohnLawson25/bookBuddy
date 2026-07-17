import axios from "axios"
import { NavLink } from "react-router"
const BookList = ({Books, setSelectedBook}) => {
    
    return(
        <div>
            {"Johnny's Books"}
            {Books.map((book) => {
                return(
                    <div key={book.id} onClick={() => {setSelectedBook(book); console.log(typeof(book.id))}}>
                        <h3>
                        <NavLink to={`/BookList/${book.id}`}>{book.title}</NavLink>
                        </h3>
                    </div> 
                )
            })}
        </div>
    )
};



export default BookList
 
