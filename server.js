const express = require("express");
const macroRoutes = require("./routes/macro.routes");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api", macroRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta http://localhost:3000"
);
});
