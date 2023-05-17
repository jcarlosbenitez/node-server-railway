import * as dotenv from 'dotenv'
import express from "express";
import * as url from "url";
import hbs from "hbs";
dotenv.config()

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();
// const port = 8080;
const port = process.env.PORT
console.log(port)

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + 'views/partials', (err) => {
console.log(err)
})


// server contenido estático

app.use(express.static("pagina"));
app.get("/", (req, res) => {
  res.render('home',{
    nombre: 'JUAN BENITEZ',
    titulo: 'Curso Node JS'
  });
});

app.get("/generic", (req, res) => {
  res.render('generic',{
    nombre: 'JUAN BENITEZ',
    titulo: 'Curso Node JS'
  });
});

app.get("/elements", (req, res) => {
  res.render('elements',{
    nombre: 'JUAN BENITEZ',
    titulo: 'Curso Node JS'
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("hola-mundo en su respectiva ruta");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
