const express = require("express");
const { getUserRaw, getUser, insertUserRaw, insertUser, deleteUserById, deleteUserRawById, updateUserRaw, updateUser } = require('./model/user');

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});


// READ
app.get("/getUserRaw", async (req, res) => {
    try {
        const result = await getUserRaw();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.get("/getUser", async (req, res) => {
    try {
        const result = await getUser();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


// CREATE
app.post("/insertUserRaw", async (req, res) => {
    try {
        const { name, email, role, salary } = req.body;
        const result = await insertUserRaw({ name, email, role, salary });
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.post("/insertUser", async (req, res) => {
    try {
        const { name, email, role, salary } = req.body;
        // res.status(201).json(result); // if .returning("*") is used then will return inserted row
        const result = await insertUser({ name, email, role, salary });
        if (result?.rowCount === 1) {
            res.status(201).json("Data inserted successfully.");
        } else {
            res.status(201).json("Data not started.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});



// UPDATE user by ID (raw SQL)
app.put("/updateUserRaw/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateUserRaw(id, req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

});

// UPDATE user by ID
app.put("/updateUser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateUser({id, body : req.body});
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});




// DELETE
app.delete("/deleteUserRaw/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteUserRawById({ id });
        res.status(201).json(result); // returns deleted row when returning * is used
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

app.delete("/deleteUser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteUserById({ id }); // returns deleted row when returning * is used, else number of rows deleted
        if (result > 0) {
            res.status(201).json("User deleted successfully.");
        } else {
            res.status(201).json("No user found with given id.");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});



const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running at port : ${port}`);
})