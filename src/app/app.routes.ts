import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router';


export const routes:Routes=[
    
    {path:'login',component:LoginComponent},
    {path:'home/:id',component:HomeComponent},
    {path:'**',redirectTo:'login'}
]