const getUsers = (req, res) => {
    return res.send([
        {
            id: 1,
            name: 'John Doe',
            email: 'j@gmailk.com'
               },
        ])

}

module.exports = {
    getUsers
}