import request from "supertest";

import {app} from '../../src/app'

describe('test topics.route.ts', () => {
      test('all topics route' , async()=> {
            const res = await request(app).get('/topics')
            expect(res.body).toEqual(["t1", "t2"])
      })
})
