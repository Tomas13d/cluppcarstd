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