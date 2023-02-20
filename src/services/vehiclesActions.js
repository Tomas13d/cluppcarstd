import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const getActiveVehicles = async (token) => {
    try{
        const payloadHeader = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
          const allCars = await axios.get(API_URL+"/vehicles", payloadHeader)
        return allCars.data
    } catch (err){
        console.log(`Get Active Vehicle Error: ${err}`);
    }
}


export const addNewVehicle = async ({token, values}) => {
  try{
      const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const newCar = await axios.post(API_URL+"/vehicles", values, payloadHeader)
      return newCar
  } catch (err){
      console.log(`Error Adding New Car: ${err}`);
  }
}


export const searchVehicle = async ({search, token}) => {
  try{
      const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const newCar = await axios.get(API_URL+`/vehicles/search/${search}`, payloadHeader)
      return newCar.data
  } catch (err){
      console.log(`Error Adding New Car: ${err}`);
  }
}

export const deleteVehicle = async ({id, token}) => {
  try{
      const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const newCar = await axios.put(API_URL+`/vehicles/${id}`, {},payloadHeader)
      return newCar.data
  } catch (err){
      console.log(`Error Adding New Car: ${err}`);
  }
}