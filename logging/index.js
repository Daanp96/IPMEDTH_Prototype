import fs from "fs";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('./logging/public/'));

app.get('/', (req, res) => {
    res.send('index.html');
});

const rando = Math.floor(Math.random() * 1000) + 1;

app.post('/sendData', (req, res) => {
    if(req.body){
        fs.writeFile(`logging/data/text_input_${req.body.puzzel}_${rando}.json`, JSON.stringify(req.body.data), (err) => {
            if (err) {
                throw err;
            }
        })
        res.send(req.body);
    } else {
        res.send(404, "Iets ging niet goed...");
    }
});

app.post('/sendStorage', (req, res) => {
    if(req.body){
        fs.writeFile(`logging/data/storage_prototype_${req.body.proto}_${rando}.json`, JSON.stringify(req.body.time), (err) => {
            if (err) {
                throw err;
            }
        })
        res.send(req.body);
    } else {
        res.send(404, "Iets ging niet goed...");
    }
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));