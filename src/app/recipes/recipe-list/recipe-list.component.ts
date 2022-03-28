import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://sieupet.com/sites/default/files/pictures/images/cho-pug-cuoi.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-nen-chu-cho-poodle-de-thuong-cho-desktop-840x475.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeSelected.emit(recipe);
  }

}
