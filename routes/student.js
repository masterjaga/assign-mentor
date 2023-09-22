
import {getAllStudents,addStudent,getStudentByMentor,updateStudentById,getStudentWithOutMentor } from "../getData.js";
import express from "express";

export const router=express.Router();

router.get('/', async (req, res) => {
  let students = await getAllStudents(req);
  res.send(students);
});

router.post('/', async (req, res) => {
  const newStudent = req.body;
  console.log(newStudent);
  let result = await addStudent(newStudent);
  res.send(result);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const updateStudent = req.body;
  console.log(updateStudent)
  const result = await updateStudentById(id,updateStudent);
  console.log(result)
  res.send(result);
});

router.get('/mentor/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const result = await getStudentByMentor(id);
  result ? res.send(result) : res.status(404).send({ message: "No Students found" });
});

router.get('/withoutmentor', async (req, res) => {
  const result = await getStudentWithOutMentor();
  result ? res.send(result) : res.status(404).send({ message: "No Students found" });
});



export const students=router;
