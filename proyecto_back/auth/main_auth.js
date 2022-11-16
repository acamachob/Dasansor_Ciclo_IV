const jwt = require("jsonwebtoken")
const { request } = require("../app")

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQzZWQ3MThmN2M3MzVlODdlNDM0MCIsInVzdWFyaW8iOiJhZG1pbiIsImlhdCI6MTY2ODU2MzEyNSwiZXhwIjoxNjY4NjA2MzI1fQ.ahnZwJDD9-JfARL9dIoa6nBZrVF6i91W40hnY0EqTdk")[1]
        const decoded = jwt.verify(token, "__recret__")
        req.usuario = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({code: 4, msg:"No tienes permiso para acceder"})
    }
}

module.exports = auth