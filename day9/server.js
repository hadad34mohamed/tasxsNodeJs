const express = require('express');
const { loadTasks, saveTasks,loadUsers, saveUsers,saveLoggedInUser, loadLoggedInUser,logoutUser} = require("./utils");

const app = express();


// 1...
const tasks = [];
const users = [];
//2.....
loadTasks(tasks, "data/tasks.json");
loadUsers(users, "data/users.json");
let loggedInUser = loadLoggedInUser();
app.use(express.json());
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});
app.get('/api/tasks/search', (req, res) => {
    const keyword = req.query.keyword?.toLowerCase();
    if (!keyword) return res.json([]);
    const results = tasks.filter(task =>
        task.title.toLowerCase().includes(keyword) ||
        task.description.toLowerCase().includes(keyword)
    );
    res.json(results);
});

// Add task (must be logged in)
app.post('/api/tasks', (req, res) => {
    if (!loggedInUser) return res.status(401).json({ message: "Not authenticated" });

    const { title, description, priority } = req.body;
    if (!title || !description || !priority) {
        return res.status(400).json({ message: "Missing task fields" });
    }

    const task = { id: tasks.length + 1, title,description,priority,username: loggedInUser.username};

    tasks.push(task);
    saveTasks(tasks, "data/tasks.json");
    res.json({ message: "Task added", task });
});

// remove task (must be logged in + admin or creator)
app.delete('/api/tasks', (req, res) => {
    if (!loggedInUser) return res.status(401).json({ message: "Not authenticated" });

    const id = parseInt(req.query.id);
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) return res.status(404).json({ message: "Task not found" });

    const task = tasks[taskIndex];
    if (loggedInUser.role !== "ADMIN" && task.username !== loggedInUser.username) {
        return res.status(403).json({ message: "Not authorized to delete this task" });
    }

    tasks.splice(taskIndex, 1);
    saveTasks(tasks, "data/tasks.json");
    res.json({ message: "Task deleted" });
});
app.get("/profile", (req, res) => {
    const username = req.query.username;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});
// remove profile (must be admin)
app.delete("/profile", (req, res) => {
    if (!loggedInUser || loggedInUser.role !== "ADMIN") {
        return res.status(403).json({ message: "Only admin can delete profiles" });
    }

    const username = req.query.username;
    const index = users.findIndex(u => u.username === username);
    if (index === -1) return res.status(404).json({ message: "User not found" });

    users.splice(index, 1);
    saveUsers(users, "data/users.json");
    res.json({ message: "User deleted successful" });
});
app.post("/login", (req, res) => {
    const user = users.find(u =>
        u.username === req.body.username || u.email === req.body.username
    );
    if (!user) return res.status(401).json({ message: "User Not Found" });
    if (user.password !== req.body.password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    saveLoggedInUser(user);
    loggedInUser = user;
    res.json({ message: "Logged in successful", user });
});
app.post("/register", (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const user = { username, email, password, role };
    users.push(user);

    saveUsers(users, "data/users.json");
    res.json({ message: "User registered successful", user });
});



app.post("/logout", (req, res) => {
    logoutUser();
    loggedInUser = null;
    res.json({ message: "Logged out successful" });
});
app.listen(8000, () => {
    console.log(` Server is running `);
});