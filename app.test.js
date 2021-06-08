const request = require("supertest")
const app = require('./app');

describe('Coder Color Converter', () => {
    // 255,255,0 -> ffff00
/*     test('POST /rgb -> RGB to HEX',  () => {
        const body = { code: [255,255,0] }
        return request(app)
        .post('/rgb')
        .send(body)
        .then( res => {
            expect(res.body.hex).toEqual('ffff00')
        })
        .catch(err => console.log(err))
    }) */
    
    const RGB = { code: [255,255,0] }
    const HEX = { code: "ffff00" }

    test('POST /rgb -> RGB to HEX happy path',  async () => {
        const res = await request(app)
        .post('/rgb')
        .send(RGB)
        
        expect(res.statusCode).toBe(200)
        expect(res.body.hex).toEqual('ffff00')
    })

    test('POST /rgb -> RGB to RGB bad request "incorrect"', async () => {
        // bad request response 400
        // input: 256,1,0
        // output: incorrect
        const res = await request(app)
        .post('/rgb')
        .send({ code: [256,1,0] })

        expect(res.statusCode).toBe(400)
        expect(res.body.err).toBe("Incorrect")
        
    })
    
    test('POST /rgb -> RGB to RGB bad request "too long"', async () => {
        // bad request response 400 
        // input: 255,1,0,5
        // output: too long
        const res = await request(app)
        .post('/rgb')
        .send({ code: [256,1,0,5] })
        
        expect(res.statusCode).toBe(400)
        expect(res.body.err).toBe("Too long")

    })
    
    test('POST /hex -> HEX to RGB happy path', async () => {
        const res = await request(app)
        .post('/hex')
        .send(HEX)
        
        expect(res.statusCode).toBe(200)
        expect(res.body.rgb).toEqual([255, 255, 0])
    })
    
    test('POST /hex -> HEX to RGB bad request "incorrect"', async () => {
        // bad request response 400
        // input: fffg00
        // output: incorrect
        const res = await request(app)
        .post('/hex')
        .send({ code: "fffg00"})
        
        expect(res.statusCode).toBe(400)
        expect(res.body.err).toBe("Incorrect")

    })
    
    test('POST /hex -> HEX to RGB bad request "too long"', async () => {
        // bad request response 400
        // input: ffff000
        // output: too long 
        const res = await request(app)
        .post('/rgb')
        .send({code: "ffff000"})
    
        expect(res.statusCode).toBe(400)
        expect(res.body.err).toEqual("Too long")
    })
})