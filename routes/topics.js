const express = require("express");
const router = express.Router();

const Topic = require("../models/topic");

router.get("/", (request, response) => {
    Topic.list().then(topics => {
        response.json({
            topics
        });
    });
});

module.exports = router;
