const express = require("express");
const router = express.Router();
const macroService = require("../services/macro.service");

router.post("/calcular", (req, res) => {
  const resultado = macroService.calcular(req.body);
  res.json(resultado);
});

module.exports = router;
