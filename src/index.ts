import express, { Application, Request, Response } from "express";

const app: Application = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    if (error instanceof Error) {
        console.log(`Error occurred: ${error.message}`)
    }
    else {
        console.log("An unknown error occurred.")
    }
}