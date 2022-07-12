import express from "express"
import compression from "compression"
import homeController from "./controllers/homeController.js"

const port = process.env.PORT || 3000;
const app = express()

// The compression package threshold considers compression requests starting around 1kb for the response body
// Reference: https://www.npmjs.com/package/compression#threshold
app.use(compression())
app.use("/", homeController)

app.listen(port, () => console.log(`Server is listening on port: ${port}`))