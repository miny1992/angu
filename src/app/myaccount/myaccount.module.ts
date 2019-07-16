import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyaccountRoutingModule } from './myaccount-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount.component';
import {JuriNameValidator} from '../shared/forbidden-name.directive';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, MyaccountComponent,JuriNameValidator],
  imports: [
    CommonModule,
    MyaccountRoutingModule,
      FormsModule
  ],
    exports:[FormsModule]
})
export class MyaccountModule { }
