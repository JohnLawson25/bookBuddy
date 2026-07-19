import axios from "axios";
import { useParams } from "react-router";

const APILink = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";



//Add unique username and info to Profile
const ProfilePage = ({user, Books, userReservations, setUserReservations}) => {
    const {id} = useParams();


    const returnBook = async (id ) => {
        try {
            
            await axios.delete(`${APILink}/reservations/${id}`, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },                    
            });


            setUserReservations(userReservations.filter((item) => {
                return item.id !== id
        }));
        } catch (error) {
            console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Full error:", error);;
        }
    };

    


    return(
        <div>
            <h2>Profile:</h2>
            <h4>{user.firstname} {user.lastname}</h4>
            <h4>{user.email}</h4>
            
            <hr/>
            <h5>Reserved Books:</h5>
            {console.log(userReservations)}
                {userReservations.length > 0 ? (<div>
                    {userReservations.map((res) => {
                        console.log(res)
                        const book = Books.find((book) => 
                             book.id === (res.bookid * 1));
                        return(
                            <div key={res.id}>
                                <p>{book.title}</p>
                                <button onClick={() => {returnBook(res.id)}}>Remove from favorites</button>
                            </div>
    )
})
}

            </div>)
            : (<p>No Books reserved</p>
            )}
            </div>
        
    )
};
export default ProfilePage;

