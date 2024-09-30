import  express  from "express";// Importing the 'express' library to create a web server
import cors from "cors";// Importing 'cors' to handle Cross-Origin Resource Sharing, which allows your API to be accessed from different domains
import simpleGit from "simple-git";
import {generate} from "./utils";
const app = express();// Create an instance of the express app
app.use(cors())// Using the 'cors' middleware to enable cross-origin requests, which is important for security and data-sharing between different origins
app.use(express.json());// Using the 'express.json()' middleware to automatically parse incoming JSON requests (i.e., requests with a JSON body)
app.post("/deploy",(req,res)=>{
    const repoUrl=req.body.repoUrl;
    const id=generate();
    console.log(repoUrl);
    await  simpleGit().clone(repoUrl,"./output")

    res.json({})
})

app.listen (3000)