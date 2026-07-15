import axios from "axios"

const BookList = ({Books}) => {
    
    return(
        <div>
            {"Johnny's Books"}
            {Books.map((book) => {
                return(
                    <div>
                        <p>{book.title}</p>
                    </div> 
                )
            })}
        </div>
    )
};



export default BookList
 
