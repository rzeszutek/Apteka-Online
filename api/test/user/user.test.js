test('Should register a user', async () => {
    await request(app).post('/api/user/create')
        .send({
            email:'adam@gmail.com',
            name:'Adam',
            surname:'Kowalski',
            password:'1234567'
        });
    expect(201)
});    

test('Should login a user', async () => {
    await request(app).post('/api/user/auth')
        .send({
            email:'adam@gmail.com',
            password:'1234567',
        });
    expect(200)
});    