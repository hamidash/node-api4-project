const express = require('express');
const cors = require('cors')

const server = express();

server.use(express.json());
server.use(cors())

const { v4: uuidv4 } = require('uuid');

const users = [
    {
     id: uuidv4(),
     name: "Ed",
     password:"abc1"
    },
    {
     id: uuidv4(),
     name: "Ted",
     password: "abc1"
    }
]

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).json({message: 'missing username or password'})
    }else{
        const newUser = {
            id: uuidv4(),
            name: username,
            password: password
        }

        users.push(newUser)

        res.status(201).json(newUser)
    }
})

server.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json({message: 'missing username or password'})
    }else{
        res.status(201).json({message: 'welcome'})
    }
})

module.exports = server;