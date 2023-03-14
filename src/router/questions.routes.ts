import express from 'express'
import {getAllQuestions, getQuestion, addQuestion, updateQuestion, deleteQuestion} from '../controllers'

const questionsRouter = express.Router()

questionsRouter.route('/').get(getAllQuestions).post(addQuestion)
questionsRouter.route('/:id').get(getQuestion).put(updateQuestion).delete(deleteQuestion)

export {questionsRouter}
