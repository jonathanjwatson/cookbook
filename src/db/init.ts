import models from "./models/index";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
    models.Ingredient.sync({ alter: isDev });
};
export default dbInit;