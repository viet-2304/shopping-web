import { Subject } from "rxjs";
import { Ingredient } from "../share/ingredient.model";

export class ShoppingListService {
    ingredientChange = new Subject<Ingredient[]>();
    startEditting = new Subject<Number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getAllIngredients() {
        return this.ingredients.slice();
    }

    getIngredientOfIndex(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.next(this.ingredients.slice());
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChange.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChange.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index,1);
        this.ingredientChange.next(this.ingredients.slice());
    }
}