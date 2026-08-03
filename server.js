let express = require("express");

const app = express();

const PORT = 5500;

app.get("/", (req, res) => {
    res.send("🚀 Deployment Successful");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Running",
        time: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});