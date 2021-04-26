import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DogHomeComponent } from './dog-home/dog-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    DogHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
