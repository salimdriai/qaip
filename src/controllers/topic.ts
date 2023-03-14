import {Request, Response} from 'express'

const getAllTopics =(req:Request, res:Response) => {
      res.json(["t1", "t2"])
}
const getTopic =(req:Request, res:Response) => {
      const {id} = req.params
      res.send('one topic: ' + id)
}
const addTopic =(req:Request, res:Response) => {
      res.send('topic added')
}
const updateTopic =(req:Request, res:Response) => {
      const {id} = req.params
      res.send('topic updated: ' + id)
}
const deleteTopic =(req:Request, res:Response) => {
      const {id} = req.params
      res.send('topic deleted: '  + id)
}

export {getAllTopics,getTopic, addTopic, updateTopic, deleteTopic}
