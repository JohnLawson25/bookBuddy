import axios from "axios"

const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

const getBookList = async() => {
    const {data} = await axios.get(API + "/books")
    console.log(data)

    return(
        
    )
};

getBookList()

export default getBookList

