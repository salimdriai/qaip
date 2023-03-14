import request from "supertest";

import {app} from '../../src/app'

describe('test questions.route.ts', () => {
      test('all questions route' , async()=> {
            const res = await request(app).get('/questions')
            expect(res.body).toEqual(['q1', "q2"])
      })
})
