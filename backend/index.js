import express from "express"
import cors from "cors"
import sequelize from "./db/db.js"
import event from "./Models/event.model.js"
const app = express();
const port = 8086;
//import moment from 'moment';


sequelize.authenticate()
    .then(function (err) {
        console.log("DB Connection has been established successfully.");
    })
    .catch(function (err) {
        console.log("Unable to connect to the database:", err);
    });
app.use(cors());
app.use(express.json());



//add new event

app.post('/add/new_event', (req, res) => {
    console.log(`.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>add event  `)

    let event_obj = {
        name: req.body.name,
        place: req.body.place,
        event_time: req.body.event_time
    }
    console.log("Event object", event_obj);
    event.create(event_obj).then((result) => res.json(result));
});


//get past events

app.get("/past_events", async (req, res) => {
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>`,req)
    const result =await event.findAll()
    console.log(`past events api is working${JSON.stringify(result)}`)
    res.json({status: "Success",data:result})
});


//get future events

app.get("/future_events", async (req, res) => {
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>`,req)
    const result =await event.findAll()
    console.log(`future events api is working${JSON.stringify(result)}`)
    res.json({status: "Success",data:result})
});



app.listen(port, () => {
    console.log(`Server started successfully ${port}`);
});