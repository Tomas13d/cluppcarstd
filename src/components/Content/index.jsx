import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { getActiveVehicles } from "../../services/vehiclesActions";
import Cards from "../Cards";
import "./content.css";

function Content() {
    const { currentUser } = useAuth();
    const [carList, setCarList] = useState([])
    

    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        if(token){
            getActiveVehicles(token).then(res => {
                setCarList(res)
            })
        }
    },[])



  return (
  <Container className="cards-cont">
    {carList.length > 0 ? (
        carList.map(car => (
            <Cards car={car} />
        ))
    ) : (
        <h4 className="text-light">There are no loaded vehicles</h4>
    )}
  </Container>
  );
}

export default Content;
