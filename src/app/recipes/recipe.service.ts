import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../share/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A pull dog',
            'His face is so funny', 
            'https://sieupet.com/sites/default/files/pictures/images/cho-pug-cuoi.jpg',
            [new Ingredient('big dog',10),
             new Ingredient('child dog', 5)
            ]),
        new Recipe(
            'A poodle dog', 
            'This is a cute dog', 
            'https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-nen-chu-cho-poodle-de-thuong-cho-desktop-840x475.jpg',
            [new Ingredient('big dog',1)
            ])
      ];

      constructor(private shopService: ShoppingListService){

      }
    getAllRecipe() {
        return this.recipes.slice();    
    }

    getRecipeByIndex(index: number) {
        return this.recipes[index];
    }
    addIngredientToShoppingList(ingredient: Ingredient[]) {
        this.shopService.addIngredientToShoppingList(ingredient);
    }
}