const express = require("express");
const { 
  handleGetAllUsers, 
  handleGetUserByID,
  handleUpdateUserByID, 
  handleDeleteUserByID, 
  handleCreateNewUser 
} = require('../controllers/user')

const router = express.Router();

router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
.route("/:id")
.get(handleGetUserByID)
.patch(handleUpdateUserByID)
.delete(handleDeleteUserByID);


//If you wnat to declare seprate routes
// router.get("/", handleGetAllUsers);
// router.get("/:id", handleGetUserByID);
// router.post("/", handleCreateNewUser);
// router.patch("/:id", handleUpdateUserByID);
// router.delete("/:id", handleDeleteUserByID);

// router.put("/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const index = users.findIndex((u)=> u.id === id);
//     users[index]={ id, ...req.body };
//     fs.writeFile("./Mock_DATA.json", JSON.stringify(users), (err)=>{
//         res.json({message: "User updated (full)",user: users[index]});
//     });
// });

// app.patch("/api/users/:id", async(req, res) => {
//   await User.findByIdAndUpdate
//   (req.params.id,req.body);
//   return res.json({status:"Success"});
// });

module.exports = router;