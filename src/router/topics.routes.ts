import express from "express"
import {getAllTopics, getTopic, addTopic, updateTopic, deleteTopic} from '../controllers'

const topicsRouter = express.Router()

topicsRouter.route('/').get(getAllTopics).post(addTopic)
topicsRouter.route('/:id').get(getTopic).put(updateTopic).delete(deleteTopic)

export {topicsRouter}
