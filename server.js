const express = require("express");
const app = express();

const PORT = 1234;

app.get("/", (req, res) => res.send("Hello World  !! ") );


app.listen(PORT, () => {
    console.log("Express Up and Running in port {}" , PORT);
});