import {useParams} from "react-router"

const SingleBook = ({Books}) => {
    const { id } = useParams();    

    const singleBook = Books.find((book) => {
        return book.id === (id * 1)
     ;  
    });
    if(!singleBook){
        return <h2>Loading...</h2>
    }
    console.log(singleBook.available)
    return(
        <div>
            <h2>{singleBook.title}</h2>
            <h4>ID: {singleBook.id}</h4>
            <img src={singleBook.coverimage} />
            <h4>{singleBook.description}</h4>
            {singleBook.available ? <h3>In stock</h3> : <h3>Out of stock</h3>}
        </div>
        
    )
};

export default SingleBook