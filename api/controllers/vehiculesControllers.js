import { db }from "../server/config/firebase-config.js"

export const addNewVehicle = async (req, res) => {
  try {
    const { brand, model, year } = req.body;
    const newCar = await db.collection("vehicles").add({
      brand,
      model,
      year,
      timestamp: (new Date()).getTime(),
      deleted: false,
    });
    res.status(201).json({ id: newCar.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// get active vehicles (deleted = false)
export const getActiveVehicles = async (req, res) => {
  try {
    const allCars = db.collection("vehicles");
    const result = [];
    await allCars.get().then((querySnapshot) => {
      querySnapshot.docs.forEach(
        (doc) => {
          if(!doc.data().deleted){
            const doctRef = doc.ref.path.split("vehicles/")[1]
            result.push({...doc.data(), id: doctRef})
          } 
        }
      );
    });
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const getVehicleById = async (req, res) => {
  try {
    const car = await db.collection("vehicles").doc(req.params.id).get();
    if (!car.exists) {
      res.status(404).send("Vehicle not found");
    } else {
      res.status(200).json(car.data());
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const updateDeletedVehicle = async (req, res) => {
  try {
    await db.collection("vehicles").doc(req.params.id).update({
      deleted: !req.body.deleted,
    });
    res.status(200).send("Vehicle deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const searchVehicle = async (req, res) => {
  try {
    const text = req.params.text.toLowerCase();
    const carsRef = db.collection("vehicles");
    const cars = [];
    await carsRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const car = doc.data();
        const doctRef = doc.ref.path.split("vehicles/")[1]
        if (
          car.brand.toLowerCase().includes(text) ||
          car.model.toLowerCase().includes(text) ||
          car.year.toLowerCase().toString().includes(text)
        ) {
          cars.push({...car,id: doctRef});
        }
      });
    });

    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    return null;
  }
};


    