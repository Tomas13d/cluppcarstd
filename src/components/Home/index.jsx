

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getActiveVehicles, searchVehicle } from "../../services/vehiclesActions";
import AddCarForm from "../AddCarForm";
import Content from "../Content";
import NavbarApp from "../Navbar";
import "./home.css";

function Home() {
  const [carList, setCarList] = useState([]);
  const [search, setSearch] = useState("")
  const [searchedResult, setSearchedResult] = useState([])
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const { content } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    try{
      let searchResult = await searchVehicle({search, token});
      setSearchedResult(searchResult)
      navigate("/view/search")
    } catch (err){
      setError(`Error: ${err}`);
    }
  }
 

  useEffect(() => {
    const elementsToList = async () => {
      try {
        const token  = window.localStorage.getItem('token')
        let allCars = content === "all" ? await getActiveVehicles(token) : searchedResult
        setCarList(allCars);
      } catch (err) {
        setError(`Error: ${err}`);
      }
    };
    elementsToList();
  }, [content]);


  


  return (
  <>
  <NavbarApp setSearch={setSearch} handleChangeSearch={handleChangeSearch} search={search} handleSearchSubmit={handleSearchSubmit}/>
  {content !== "addVehicle" ? (
    <Content carList={carList} error={error}/>
  ) : (
    <AddCarForm token={token}/>
  ) }
  </>
  );
}

export default Home;
