import { EventEmitter } from "@angular/core";
import { Ingredient } from "../share/ingredient.model";

export class ShoppingListService {
    ingredientChange = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getAllIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChange.emit(this.ingredients.slice());
    }
}