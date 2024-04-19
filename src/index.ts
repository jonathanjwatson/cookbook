import express, { Application, Request, Response } from "express";
import sequelizeConnection from "./db/config";
import dbInit from "./db/init";
import ingredientsRouter from "./api/routes/ingredients";

const app: Application = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/ingredients", ingredientsRouter);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
        try {
            sequelizeConnection.authenticate();
            console.log("Connection established successfully.");
            dbInit();
        } catch (err) {
            console.log(err);
        }

    })
} catch (error) {
    if (error instanceof Error) {
        console.log(`Error occurred: ${error.message}`)
    }
    else {
        console.log("An unknown error occurred.")
    }
}