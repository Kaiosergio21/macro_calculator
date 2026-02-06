const express = require("express");
const macroRoutes = require("./routes/macro.routes");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api", macroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});
