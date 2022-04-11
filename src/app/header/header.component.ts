import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../share/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  implements OnInit , OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  ngOnInit(): void {
      this.authService.user.subscribe(user => {
        this.isAuthenticated = !user ? false : true;
        console.log(!user);
        console.log(!!user);
      });
  }

  ngOnDestroy(): void {
      this.dataStorageService.storeRecipe();
  }
  onSaveData() {
    this.dataStorageService.storeRecipe();

  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
