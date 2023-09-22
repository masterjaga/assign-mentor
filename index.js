import { mentors } from "./routes/mentor.js";
import { students } from "./routes/student.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {MongoClient} from "mongodb"; 

dotenv.config();

export const app = express();
//vivek
const port=process.env.PORT;

const mentor=[{
"id":1,
"mentor_name":"vivek",
"skill":"react.js"
},
{
  "id":2,
  "mentor_name":"balaji",
  "skill":"angular.js"
},
{
"id":3,
"mentor_name":"gopal",
"skill":"vue.js"  
}];

const student=[{
  "id":101,
"student_name":"sankar",
"student_email":"vivek@gmail.com",
"mentor_id":"1"
},{"id":102,
"student_name":"surya",
"student_email":"vivek@gmail.com",
"mentor_id":""
}];

//const MONGO_URL="mongodb://localhost";//if port is defalut

const MONGO_URL=process.env.MONGO_URL;
app.use(cors())
async function createConnection(){
const client=new MongoClient(MONGO_URL);
await client.connect();
console.log("DB Connected");
return client;
}

export const client=await createConnection();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!!😊😊😊🔥🔥🔥🔥')
});

app.use("/mentors",mentors);
app.use("/students",students);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
