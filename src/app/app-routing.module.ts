import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'apply', component: ApplyComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
