var express = require("express");
var router = express.Router();

var burger = require("../config/orm");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject );
    });
});

router.post("/api/burgers", (req,res) => {
    burger.insertOne([req.body.burger_name], result => {
        //console.log("\n\n ----------REQUEST---------- \n\n")
        //console.log([req.body.burger_name]);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req,res) => {
    var condition = "id = " + req.params.id;
    //console.log("condition ", condition);
    burger.updateOne(req.params.id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;