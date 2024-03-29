const UserController = require("../controllers/user.controller")
const {authenticate} = require("../config/jwt.config")
module.exports=(app)=>{
    app.get("/api/users",UserController.getAll)
    app.get("/api/users/:id/f",UserController.getOneWF)
    app.get("/api/users/:id", UserController.getOne)
    app.post("/api/users",UserController.create)
    app.post("/api/users/login",UserController.loginUser)
    app.post("/api/users/signup",UserController.signupUser)
    app.post("/api/users/logout",UserController.logout)
    app.put("/api/users/:id",UserController.updateUser)
    app.delete("/api/users/:id",UserController.delete)
    app.put("/api/users/:id/:friendId",UserController.deleteFriend)
    app.put("/api/users/accept/:id/:friendId",UserController.accReq)
    app.put("/api/users/reject/:id/:friendId",UserController.rejReq)
    app.put("/api/users/send/:id/:friendId",UserController.sendReq)
    app.put("/api/users/cancel/:id/:friendId",UserController.cancReq)
};