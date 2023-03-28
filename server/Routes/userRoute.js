const router = require("express").Router();
const User = require("../Model/userModel");

// GET ALL USERS
router.get("/user", (req, res) => {
  User.find().then((data) => {
    if (data) res.json(data);
  });
});

// GET ONE USER
router.get("/user/:id", async (req, res) => {
  let data = await User.findById();
  if (data) res.json(data);
  else res.status("notok");
});

// CREATE NEW USER
router.post("/user", async (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  await user.save().then((data) => {
    if (data) {
      res.json(data).status("ok");
    }
  });
});

// UPDATE USER
router.put("/user/:id", (req, res) => {
  console.log(req.body);
  const { name, age, course } = req.body;
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name,
        age,
        course,
      },
    }
  ).then(()=>{
    res.send('ok')
  });
});

// DELETE USER
router.delete("/user/:id", async (req, res) => {
  console.log(req.params.id)
  User.findByIdAndDelete(req.params.id).then(() => res.send("ok"));
});

module.exports = router; 
