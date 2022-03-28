import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../share/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelect = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test', 
            'https://sieupet.com/sites/default/files/pictures/images/cho-pug-cuoi.jpg',
            [new Ingredient('rice',10),
             new Ingredient('cake', 5)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-nen-chu-cho-poodle-de-thuong-cho-desktop-840x475.jpg',
            [new Ingredient('apple',1)
            ])
      ];

      constructor(private shopService: ShoppingListService){

      }
    getAllRecipe() {
        return this.recipes.slice();    
    }

    addIngredientToShoppingList(ingredient: Ingredient[]) {
        this.shopService.addIngredientToShoppingList(ingredient);
    }
}