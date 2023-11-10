import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee.component';
import { ProductComponent1 } from './components/product.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NetflixHeaderComponent } from './components/Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './components/Netflix/netflix-main/netflix-main.component';
import { NetflixIndexComponent } from './components/Netflix/netflix-index/netflix-index.component';
import { NetflixRegisterComponent } from './components/Netflix/netflix-register/netflix-register.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductComponent1,
    StudentComponent,
    LoginComponent,
    RegisterComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixIndexComponent,
    NetflixRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
