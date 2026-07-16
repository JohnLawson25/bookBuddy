const SingleBook = ({Books}) => {
    
    const singleBook = Books.find((book) => {
        return book.id === 23
     ;  //replace 1 with book id we want
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