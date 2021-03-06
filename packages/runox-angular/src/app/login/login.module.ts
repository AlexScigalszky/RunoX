import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginComponent, LoginModalComponent],
    imports: [
        CommonModule,
        SharedModule,
        LoginRoutingModule,
        FormsModule,
    ]
})
export class LoginModule { }
