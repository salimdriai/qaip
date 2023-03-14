
import {Request, Response} from 'express'

const getAllQuestions =(req:Request, res:Response) => {
      res.json(['q1', "q2"])
}
const getQuestion =(req:Request, res:Response) => {
      const {id} = req.params
      res.send('one question: ' + id)
}
const addQuestion =(req:Request, res:Response) => {
      res.send('question added')
}
const updateQuestion =(req:Request, res:Response) => {
      const {id} = req.params
      res.send('question updated: ' + id)
}
const deleteQuestion =(req:Request, res:Response) => {
      const {id} = req.params
      res.send('question deleted: '  + id)
}

export {getAllQuestions,getQuestion, addQuestion, updateQuestion, deleteQuestion}
