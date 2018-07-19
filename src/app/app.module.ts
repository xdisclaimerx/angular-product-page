import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';

const appRoutes: Routes = [
  {path: 'users', component:UserComponent},
  {path: 'products', component:ProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
