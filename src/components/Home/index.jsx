import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";
import {
  deleteVehicle,
  getActiveVehicles,
  searchVehicle,
} from "../../services/vehiclesActions";
import AddCarForm from "../AddCarForm";
import Content from "../Content";
import NavbarApp from "../Navbar";
import "./home.css";

function Home() {
  const [carList, setCarList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [flag, setFlag] = useState(false)
  const { content } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    const elementsToList = async () => {
      try {
        const token = window.localStorage.getItem("token");
        let allCars =
          content === "all" ? await getActiveVehicles(token) : searchedResult;
        setCarList(allCars);
      } catch (err) {
        setError(`Error: ${err}`);
      }
    };
    elementsToList();
  }, [content, flag]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      let searchResult = await searchVehicle({ search, token });
      setSearchedResult(searchResult);
      navigate("/view/search");
    } catch (err) {
      setError(`Error: ${err}`);
    }
    setFlag(!flag)
  };

  const handleDelete = async (id) => {
    try {
      
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this vehicle!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await deleteVehicle({ token, id });
          swal("Poof! Your vehicle has been deleted!", {
            icon: "success",
          });
          setFlag(!flag)
        }
      });
    } catch (err) {
      setError(`Error: ${err}`);
    }
  };


  return (
    <>
      <NavbarApp
        handleChangeSearch={handleChangeSearch}
        search={search}
        handleSearchSubmit={handleSearchSubmit}
      />
      {content !== "addVehicle" ? (
        <Content carList={carList} error={error} handleDelete={handleDelete} />
      ) : (
        <AddCarForm token={token} />
      )}
    </>
  );
}

export default Home;
