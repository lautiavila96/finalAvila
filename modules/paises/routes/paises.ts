import * as express from "express"
import * as PaisesSchema from "../schemas/paises";

const router = express.Router()

router.post("/paises", async (req, res) => {
    try {
      const newPais = req.body;
      const paises = new PaisesSchema.paises(newPais);
      const paisNuevo = await paises.save();
      console.log("Pais agregado", paisNuevo);
      return res.status(200).send({ status: "success", data: paisNuevo });
    } catch (err) {
      console.log("Error: ", err);
      return res.status(404).send({ status: "error", data: err });
    }
  });
  
  router.get("/paises", async (req, res) => {
    try {
      let paises = await PaisesSchema.paises.find();
      console.log("Paises registrados!", paises);
      return res.status(200).send({ status: "success", data: paises });
    } catch (err) {
      console.log("Error: ", err);
      return res.status(404).send({ status: "error", data: err });
    }
  });
  
  router.put("/paises/:id", async (req, res) => {
    try {
      const paisesUpdate = req.body;
      const idPaises = req.params.id;
      const paisesUpdated = await PaisesSchema.paises.findByIdAndUpdate(
        idPaises,
        paisesUpdate,
        { new: true }
      );
      console.log("Pais Modificado", paisesUpdated);
      return res.status(200).send({ status: "success", data: paisesUpdated });
    } catch (err) {
      console.log("Error: ", err);
      return res.status(404).send({ status: "error", data: err });
    }
  });
  
  router.delete("/pais/:id", async (req, res) => {
    try {
      const paisDelete = req.body;
      const idPaises = req.params.id;
      const paisesDeleted = await PaisesSchema.paises.findByIdAndDelete(
        idPaises,
        paisDelete
      );
      console.log("Pais Borrado", paisesDeleted);
      return res.status(200).send({ status: "success", data: paisesDeleted });
    } catch (err) {
      console.log("Error: ", err);
      return res.status(404).send({ status: "error", data: err });
    }
  });
  
  export = router;
  