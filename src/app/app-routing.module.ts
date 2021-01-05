import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {MedicineComponent} from './components/medicine/medicine.component';
import {MedicineItemComponent} from './components/medicine-item/medicine-item.component';
import {MedicineItemDetailsComponent} from './components/medicine-item-details/medicine-item-details.component';
import {FooterComponent} from './components/footer/footer.component';
import {PrescriptionComponent} from './components/prescription/prescription.component';
import {EquipmentComponent} from './components/equipment/equipment.component';
import {AuthGuard} from "./services/auth/auth.guard";
import {EquipmentItemComponent} from "./components/equipment-item/equipment-item.component";
import {EquipmentItemDetailsComponent} from "./components/equipment-item-details/equipment-item-details.component";
import {OrderComponent} from "./components/order/order.component";
import {OrderItemComponent} from "./components/order-item/order-item.component";
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";
import {AddMedicineComponent} from "./components/add-medicine/add-medicine.component";
import {AddEquipmentComponent} from "./components/add-equipment/add-equipment.component";
import {OrdersPanelComponent} from "./components/orders-panel/orders-panel.component";
import {MedicinesPanelComponent} from "./components/medicines-panel/medicines-panel.component";
import {UpdateMedicineComponent} from "./components/update-medicine/update-medicine.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'medicine-item', component: MedicineItemComponent },
  { path: 'medicine-item-details/:id', component: MedicineItemDetailsComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'equipment-item', component: EquipmentItemComponent },
  { path: 'equipment-item-details/:id', component: EquipmentItemDetailsComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-item', component: OrderItemComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'control-panel', component: ControlPanelComponent, children: [
      { path: 'add-medicine', component: AddMedicineComponent, outlet: 'medicine-outlet' },
      { path: 'add-equipment', component: AddEquipmentComponent, outlet: 'equipment-outlet' },
      { path: 'orders-panel', component: OrdersPanelComponent, outlet: 'orders-panel-outlet' },
      { path: 'medicines-panel', component: MedicinesPanelComponent, outlet: 'medicines-panel-outlet' }
    ]},
  { path: 'update-medicine/:id', component: UpdateMedicineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
