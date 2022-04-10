import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../share/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService){}
  onSaveData() {
    this.dataStorageService.storeRecipe();

  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
