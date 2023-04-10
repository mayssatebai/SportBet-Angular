import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsucessComponent } from './loginsucess/loginsucess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
 {path:'loginsucess',component:LoginsucessComponent},
 {path:'registration',component:RegistrationComponent},
 {path:'login', component:LoginComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
