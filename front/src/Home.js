import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();
    var retrievedObject = localStorage.getItem('user');
    let user = JSON.parse(retrievedObject);

    useEffect(() => {
        navigate(`/user/${user.pk}`)
    }, [])
}
 
export default Home;