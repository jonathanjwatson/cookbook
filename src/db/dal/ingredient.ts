import { Op } from "sequelize";
import models from "../models";

import { IngredientInput, IngredientOutput } from "../models/Ingredient";

export const create = async (payload: IngredientInput): Promise<IngredientOutput> => {
    const ingredient = await models.Ingredient.create(payload);
    return ingredient as IngredientOutput;
}