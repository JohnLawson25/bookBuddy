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
const [user, setUser] = useState({})
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


const authenticate = async() => {
  try {
    const { data } = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
      headers: {
        "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
      }
    });
    setUser(data);
    console.log(user)

  } catch (error) {
    console.error(error)
  }
}

useEffect(() => {
  const checkToken = () => {
    const loggedInToken = window.localStorage.getItem("token");
    if(loggedInToken) {
      authenticate();
    }
  }
  checkToken();
}, [user.id]);

  return (
    <div>
      <h1>
        <img id="logo-image" src="books.png" />
        Library App
      </h1>
    
      
      {/*Implement Routes*/}
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />} >
        <Route index element={<BookList Books={Books} setSelectedBook={setSelectedBook} userReservations={userReservations} setUserReservations={setUserReservations}/>} />
          <Route path="/Login" element={<Login authenticate={authenticate} />}   />
          <Route path="/ProfilePage" element={<ProfilePage user={user} Books={Books} userReservations={userReservations} setUserReservations={setUserReservations} />} />
          <Route path="/Register" element={<Register  />} />  
          <Route path="/BookList/:id" element={<SingleBook user={user} Books={Books} selectedBook={selectedBook} userReservations={userReservations} setUserReservations={setUserReservations}  />} />           
          <Route path="*" element={<Error404 />} />
     
        </Route>
      </Routes>
      <hr/>
      
    </div>
  );
}

export default App;
