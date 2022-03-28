import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppinglistForm: NgForm;
  subscription: Subscription;
  isEdit = false;
  editItemIndex: number;
  editItem: Ingredient;
  constructor(private  shopService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopService.startEditting.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.isEdit = true;
        this.editItem = this.shopService.getIngredientOfIndex(index);
        this.shoppinglistForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.isEdit) {
      this.shopService.updateIngredient(this.editItemIndex, newIngredient);
      this.isEdit = false;
    } else {
      this.shopService.addIngredient(newIngredient);
    }
    this.shoppinglistForm.reset();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }  

  onClear() {
    this.shoppinglistForm.reset();
    this.isEdit = false;
  }

  onDelete() {
    this.shopService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
}
