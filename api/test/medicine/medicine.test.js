test('Should delete medicine', async () => {
    const {body} = await request(app).delete('/api/medicine/delete/5faacb4b702e6c4c78993c02')
    expect(body).toEqual('Medicine with id: 5faacb4b702e6c4c78993c02 deleted.')
})