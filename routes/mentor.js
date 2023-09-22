
import { getAllMentors,addMentor,assignMentor } from "../getData.js";
import express from "express";

export const router=express.Router();

router.get('/', async (req, res) => {
  let mentors = await getAllMentors(req);
  res.send(mentors);
});

router.post('/', async (req, res) => {
  const newMentor = req.body;
  console.log(newMentor);
  let result = await addMentor(newMentor);
  res.send(result);
});

router.put('/assignmentor/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const studentList = req.body;
  console.log(studentList);
  let result = await assignMentor(id,studentList);
  res.send(result);
});


export const mentors=router;
