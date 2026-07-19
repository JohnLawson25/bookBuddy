import axios from "axios"
import { NavLink } from "react-router"
const BookList = ({Books, setSelectedBook, userReservations, setUserReservations}) => {
    
const reserveBook = async(book) => {
    try {
        const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations", 
            {id:book.id},
            {headers: {
                Authorization: `${window.localStorage.getItem("token")}`
            }}
        )
        setUserReservations([...userReservations, data])
    } catch (error) {
        console.error(error);
    }
};

const checkReserve = (id) => {
        return userReservations.find((res) => {
            return res.id === id;
        })
    }

    return(
        <div>
            {Books.map((book) => {
                return(
                    <div key={book.id} className="container" onClick={() => {setSelectedBook(book); console.log(typeof(book.id))}}>
                        <h3>
                        <NavLink classNAme="title" to={`/BookList/${book.id}`}>{book.title}</NavLink>
                        </h3>
                        <h5 className="author">{book.author}</h5>
                        <p className="description">{book.description}</p>
        
                        <img src={book.coverimage} className="bookimg" />
                        
                    </div> 
                )
            })}
        </div>
    )
};



export default BookList
 
