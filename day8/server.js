const express = require('express');
const { loadTasks, loadUsers, saveTasks, saveUsers } = require('./bouns');
const app = express();
const tasks = [];
const users = [];
const fs = require('fs');
loadTasks(tasks, "data/tasks.json");
loadUsers(users, "data/users.json");
app.use(express.json());
app.get('/api/tasks', (req, res) => {

    if (fs.existsSync("data/tasks.json")) {
        const data = fs.readFileSync("data/tasks.json");
        file = JSON.parse(data);
        return res.send(file);
    }

});

app.get('/api/tasks/search', (req, res) => {
    let keyword = req.query.keyword;
    if (!loadTasks(keyword, "./data/tasks.json")) {
        return res.send("not found");
    }
    return res.send(loadTasks(keyword, "./data/tasks.json"));

});


app.post('/api/tasks', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let priority = req.body.priority;
    let file;
    if (!title || !description || !priority) {
        return res.send("Error");
    }
    if (fs.existsSync("data/tasks.json")) {
        const data = fs.readFileSync("data/tasks.json");
        file = JSON.parse(data);
    }
    for (let user of file) {
        if (user.title === title) {
            return res.send("This task found.");
        }

    }
    tasks.push({ title, description, priority });
    saveTasks(tasks, "data/tasks.json");
    return res.send("successfully.");

});

app.get("/profile", (req, res) => {
 
    let user = req.query.user;
    if (!loadUsers(user, "data/users.json")) {
        return res.send("not found")

    }
    return res.send(loadUsers(user, "data/users.json"));
});


app.post("/register", (req, res) => {
  
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let file;
    if (!username || !password || !email) {
        return res.send("Error");
    }
    if (fs.existsSync("data/users.json")) {
        const data = fs.readFileSync("data/users.json");
        file = JSON.parse(data);
    }
    for (let user of file) {
        if (user.username === username || user.email === email) {
            return res.send("This user exists.");
        }

    }
    users.push({ username, email, password });
    saveUsers(users, "data/users.json");
    return res.send("successfully.");

});

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let file;
    if (!username || !password || !email) {
        return res.send("Error");
    }
    if (fs.existsSync("data/users.json")) {
        const data = fs.readFileSync("data/users.json");
        file = JSON.parse(data);
    }

    for (let user of file) {
        if (user.username === username) {
            if (user.email === email) {
                if (user.password === password) {
                    return res.send(`Hello,${username}`)
                } else {
                    return res.send("Error password");
                }
            }
            else {
                return res.send("Error email");
            }
        }


    }
    return res.send("Error Name");

});

app.listen(8000, () => {
    console.log("Server is running on ");
});