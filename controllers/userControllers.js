exports.getUser = (req, res)=>{
    res.status(200)
    .json({
        data: {
            name: 'Nguyen Trong Nhat',
            age: 20
        },
        status: 200
    })
}

exports.createUser = (req, res) => {
    console.log(req.body)
    res.status(200)
    .json({
        data: {
            name: 'Nguyen Trong Nhat',
            age: 20
        },
        status: 200
    })
}