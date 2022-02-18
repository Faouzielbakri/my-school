const express = require("express");
const app = express();
var cors = require("cors");
const port = 9000;
const fs = require("fs");

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.body, req.query, req.params);
  res.send(
    `${req.body + JSON.stringify(req.query) + JSON.stringify(req.params)}`
  );
});

app.get("/waiting", (req, res) => {
  console.log(req.query);
  fs.readFile("./WaitingParents.json", "utf8", (err, jsonString) => {
    if (err) {
      res.send("File read failed");
      return;
    }
    res.send(JSON.parse(jsonString));
  });
});

app.get("/students", (req, res) => {
  console.log(req.query);
  fs.readFile("./students.json", "utf8", (err, jsonString) => {
    if (err) {
      res.send("File read failed");
      return;
    }
    res.send(JSON.parse(jsonString));
  });
});

app.get("/parents", (req, res) => {
  console.log(req.query);
  fs.readFile("./parents.json", "utf8", (err, jsonString) => {
    if (err) {
      res.send("File read failed");
      return;
    }
    res.send(JSON.parse(jsonString));
  });
});
app.get("/delivered", (req, res) => {
  // fs.readFile("./WaitingParents.json", "utf8", (err, jsonString) => {
  //   if (err) {
  //     res.send("File read failed");
  //     return;
  //   }
  //   try {
  //     const data = JSON.parse(jsonString);
  //     const toWrite = Array.isArray(data)
  //       ? data
  //           .map((item) => {
  //             if (item.id === req.query.parentId) {
  //               return null;
  //             }
  //             return item;
  //           })
  //           .filter((item) => item)
  //       : [];
  //     // res.send(`${JSON.stringify(toWrite)} ,` + `${JSON.stringify(data)}`);
  //     fs.writeFileSync("./new.json", JSON.stringify(toWrite));
  //     res.send("send");
  //   } catch (error) {}
  // });
  res.send(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
