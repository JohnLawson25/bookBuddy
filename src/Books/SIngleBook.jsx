import axios from "axios";
import {useParams} from "react-router"

const SingleBook = ({user, Books, selectedBook, userReservations,  setUserReservations}) => {
    const { id } = useParams();    
    const singleBook = Books.find((book) => {
        return book.id === (id * 1)
     ;  
    });
    if(!singleBook){
        return <h2>Loading...</h2>
    }
    console.log(singleBook.available)

    const reserveBook = async(book) => {
        try {
            console.log(book.id)
            const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations", 
                {bookId: book.id},
                {headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`
             }}
            
            )
            
        setUserReservations([...userReservations, data])
        
    } catch (error) {
        console.error(error);
    }
};

const checkReserve = (id) => {
        return userReservations.find((res) => {
            return res.bookId === id;
        })
    }

    return(
        <div>
            <h2>{singleBook.title}</h2>
            <h4>ID: {singleBook.id}</h4>
            <img src={singleBook.coverimage} />
            <h4>{singleBook.description}</h4>
            {singleBook.available ? <h3>In stock</h3> : <h3>Out of stock</h3>}
            {user.id ? (<div>
                        {checkReserve(singleBook.id) ? (<button disabled={true}>Already Reserved</button>) : (
                            <button onClick = {() => {reserveBook(singleBook)}} >Reserve Book</button>)}
        </div>
    
    ) : null};
    </div>
)};

export default SingleBook