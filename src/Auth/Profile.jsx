import axios from "axios"
const APILink = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"
const returnBook = async ({ userReservations, setUserReservations}) => {
    try {
        await axios.delete(APILink + "/reservations/${id}", {
            headers: {
                Authorization: `${window.localStorage.getItem("token")}`,
            },
        });
        setUserReservations(userReservations.filter((res) => {
            return res.id !== id;
        }),
    );

    } catch (error) {
        console.error(error)
    }
}

//Add unique username and info to Profile
const ProfilePage = ({user, userReservations}) => {
    return(
        <div>
            <h4>john's Profile:</h4>
            <p>username: </p>
            <p>user ID:</p>
            <hr/>
            <h5>Reserved Books:</h5>
                {userReservations.length > 0 ? (<div>
                    {userReservations.map((res) => {
                        return(
                            <div key={res.id}>
                                <p>{res.name}</p>
                                <button onClick={() => {returnBook(res.id)}}>Remove from favorites</button>
                            </div>
    )
})
}

            </div>)
            : <p>No Books reserved</p>
            }
        </div>
    )
};
export default ProfilePage;

/*<h5>Reserved Books:</h5>
                {userReservations.length > 0 ? (<div>
                    {userReservations.map((res) => {
                        return(
                            <div key={res.id}>
                                <p>{res.name}</p>
                                <button onClick={() => {returnBook(res.id)}}>Remove from favorites</button>*/