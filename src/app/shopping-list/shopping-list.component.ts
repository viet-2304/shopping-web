import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../share/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]

  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopService.getAllIngredients();
    this.shopService.ingredientChange.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }
}
