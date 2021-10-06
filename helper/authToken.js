const jwt = require('jsonwebtoken')
const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  auth: (req, res, next) => {
    jwt.verify(req.token, process.env.TOKEN_KEY, (err, decoded) => {
      if(err){
        return res.status(401).send({
          success: false,
          data: "User not auth!"
        })
      }
      req.user = decoded
      next();
    })
  }
}