test('Should delete equipment', async () => {
    const {body} = await request(app).delete('/api/equipment/delete/ 5fd78924340c32666b6dc526 ')
    expect(body).toEqual('Equipment with id: 5fd78924340c32666b6dc526 deleted.')
})

test('Should create equipment', async () => {
    await request(app).post('/api/equipment/create')
        .send({
            name:'Wózek inwalidzki V100 XXL',
            price:'1800.00',
            imageURL:'http://localhost:3000/assets/images/equipment/v100xxl.jpg', 
            description:'Lekki, stalowy wózek inwalidzki wyposażony w szybkozłącza.',
        })
    expect(201)
})
        