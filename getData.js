import { client } from "./index.js";

export async function getAllMentors(req) {
    return await client.db("test").collection("mentor").find(req.query).toArray();
  }

  export async function getAllStudents(req) {
    return await client.db("test").collection("student").find(req.query).toArray();
  }

  export async function addMentor(newMentor) {
    return await client.db("test").collection("mentor").insertOne(newMentor);
  }

  export async function addStudent(newStudent) {
    return await client.db("test").collection("student").insertOne(newStudent);
  }

  export async function getStudentByMentor(id) {
    return await client.db("test").collection("student").find({ mentor_id: id }).toArray();
  }

  export async function updateStudentById(id,updateStudent) {
    return await client.db("test").collection("student").updateOne({id:+id},{$set:updateStudent});
  }

  export async function getStudentWithOutMentor() {
    return await client.db("test").collection("student").find({ mentor_id: null }).toArray();
  }

  export async function assignMentor(id,studentList) {
    return await client.db("test").collection("student").updateMany({ id: { $in: studentList } },
      { $set: { "mentor_id": id } });
  }

  
