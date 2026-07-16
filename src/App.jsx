import { useState, useEffect } from "react";
import BookList from "./Books/BookList";
import SingleBook from "./Books/SingleBook";
import NavBar from "./Layout/NavBar";
import ProfilePage from "./Auth/Profile";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Error404 from "./Layout/Error404";
import axios from "axios"
import {Route, Routes} from "react-router"
import Layout from "./Layout/Layout";

const API = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";


function App() {
const [Books, setBooks] = useState([]);
const [selectedBook, setSelectedBook] = useState();
const [user, setUser] = useState(null)
const [userReservations, setUserReservations] = useState([]);

useEffect(() => {
  const getBookList = async() => {
    try{
    const {data} = await axios.get(API + "/books")
    console.log(data)
    setBooks(data);
    }
    catch(error){
      console.error(error);
    }
}
getBookList();
}, [])


  return (
    <div>
      <h1>
        <img id="logo-image" src="books.png" />
        Library App
      </h1>
    
      <p>
        Complete the React components needed to allow users to browse a library catalog, check out
        books, log in to their account,
        <br />
        log out of their account, review their account, and return books that they've finished
        reading.
      </p>

      <p>
        Recall that React really only cares about state. When our state changes our view changes as
        well.
      </p>

      <p>
        To that end, you may need to use some state in this top-level component in other components
        by passing them down as a prop.
      </p>
      <p>OR</p>
      <p>
        Implement context in a way that allows all the components the need to know what's in the
        context to have access to and be able to consume the right context.
      </p>

      <p>
        Don't forget that our URL should dictate our view! Set up React Router to navigate between
        the different views of your single page application!
      </p>
      //Implement Routes
      <Routes>
        <Route element={<Layout />} >
        <Route index element={<BookList Books={Books}/>} />
        <Route path="/BookList" element={<BookList Books={Books}/>} />
        <Route path="/GameList/:id"  /> 
          <Route path="/Login" element={<Login />}   />
          <Route path="/AboutMe" element={<ProfilePage user={user} userReservations={userReservations} setUserReservations={setUserReservations} />} />
          <Route path="/Register" element={<Register  />} />            
          <Route path="*" element={<Error404 />} />
     
        </Route>
      </Routes>
      <hr/>
      <SingleBook Books={Books} setSelectedBook={setSelectedBook} />
    </div>
  );
}

export default App;
