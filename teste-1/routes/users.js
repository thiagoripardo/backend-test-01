module.exports = (app) => {
    app.get('/users', function (req, res) {
        res.json({user: 'test'})
    })
}