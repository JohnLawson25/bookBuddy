import axios from "axios"
const APILink = const APILink = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"
const returnBook = async ({userReservations, setUserReservations}) => {
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

const ProfilePage = () => {
    return(

    )
};

export default ProfilePage;