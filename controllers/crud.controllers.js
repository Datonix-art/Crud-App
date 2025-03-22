// users database
const users = [
    { id: 1, name: 'user1'},
    { id: 2, name: 'user2'},
    { id: 3, name: 'user3'},
    { id: 4, name: 'user4'},
    { id: 5, name: 'user5'},
]

// get all users
export const getUsers = (req, res) => {
    try {
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({ msg: e.message})
    }
}

// get user by id
export const getUser = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const user = users.find((user) => user.id === id)
        if(!user) {
            const error = new Error('user not found')
            error.status = 404
            return next(error)
        };  
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({ msg: e.message })
    }
}


// create user
export const createUser = (req, res, next) => {
    try {
        const newTitle = req.body.name
        if(!newTitle) {
            const error = new Error('No name provided')
            error.status = 400
            next(error)
        }
        const newUser = {
            id: users.length + 1,
            name: req.body.name
        }
        users.push(newUser)
        res.status(201).json(users)
    } catch (e) {
        res.status(500).json({ msg: e.message })
    }
}

//update user
export const updateUser = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const user = users.find((user) => user.id === id)
        if(!user) {
            const error = new Error('User not found')
            error.status = 404
            return next(error)
        }
        user.name = req.body.name
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({ msg: e.message})
    }
}

// delete user
export const deleteUser = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const user = users.find((user) => user.id === id)
        if(!user) {
            const error = new Error('User not found')
            error.status = 404
            return next(error)
        }
        const newUsers = users.filter((user) => user.id !== id)
        res.status(200).json(newUsers)
    } catch (e) {
        res.status(500).json({ msg: e.message })
    }
}