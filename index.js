import { mentors } from "./routes/mentor.js";
import { students } from "./routes/student.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

dotenv.config();

export const app = express();
const port = process.env.PORT;

const mentor = [
  {
    "id": 1,
    "mentor_name": "vivek",
    "skill": "react.js"
  },
  {
    "id": 2,
    "mentor_name": "balaji",
    "skill": "angular.js"
  },
  {
    "id": 3,
    "mentor_name": "gopal",
    "skill": "vue.js"
  }
];

const student = [
  {
    "id": 101,
    "student_name": "sankar",
    "student_email": "vivek@gmail.com",
    "mentor_id": "1"
  },
  {
    "id": 102,
    "student_name": "surya",
    "student_email": "vivek@gmail.com",
    "mentor_id": ""
  }
];

// Update the MongoDB connection string
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/your-database";

app.use(cors());

// Move the MongoDB connection inside an async function
async function createConnection() {
  const client = new MongoClient(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("DB Connected");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Define a function to start the app after the MongoDB connection is established
async function startApp() {
  const client = await createConnection();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World!!!!😊😊😊🔥🔥🔥🔥')
  });

  app.use("/mentors", mentors);
  app.use("/students", students);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

// Call the function to start the app
startApp();
