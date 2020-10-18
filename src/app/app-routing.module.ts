import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {MedicineComponent} from './components/medicine/medicine.component';
import {MedicineItemComponent} from './components/medicine-item/medicine-item.component';
import {MedicineItemDetailsComponent} from './components/medicine-item-details/medicine-item-details.component';
import {FooterComponent} from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'medicine', component: MedicineComponent},
  { path: 'medicine-item', component: MedicineItemComponent},
  { path: 'medicine-item-details', component: MedicineItemDetailsComponent},
  { path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
