import {Component, NgModule} from '@angular/core';
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
import {EquipmentPanelComponent} from "./components/equipment-panel/equipment-panel.component";
import {UpdateEquipmentComponent} from "./components/update-equipment/update-equipment.component";
import {UserSettingsComponent} from "./components/user-settings/user-settings.component";
import {BankTransferComponent} from "./components/bank-transfer/bank-transfer.component";
import {PasswordResetComponent} from "./components/password-reset/password-reset.component";
import {PasswordRestoreComponent} from "./components/password-restore/password-restore.component";
import {UsersPanelComponent} from "./components/users-panel/users-panel.component";
import {FormComponent} from "./components/form/form.component";
import {OrderDetailsComponent} from "./components/order-details/order-details.component";

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
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'control-panel', component: ControlPanelComponent, children: [
      { path: 'add-medicine', component: AddMedicineComponent, outlet: 'medicine-outlet' },
      { path: 'add-equipment', component: AddEquipmentComponent, outlet: 'equipment-outlet' },
      { path: 'orders-panel', component: OrdersPanelComponent, outlet: 'orders-panel-outlet' },
      { path: 'medicines-panel', component: MedicinesPanelComponent, outlet: 'medicines-panel-outlet' },
      { path: 'equipment-panel', component: EquipmentPanelComponent, outlet: 'equipment-panel-outlet' },
      { path: 'users-panel', component: UsersPanelComponent, outlet: 'users-panel-outlet' },
    ]},
  { path: 'update-medicine/:id', component: UpdateMedicineComponent },
  { path: 'update-equipment/:id', component: UpdateEquipmentComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'bank-transfer', component: BankTransferComponent },
  { path: 'password-reset/:token/:id', component: PasswordResetComponent },
  { path: 'password-restore', component: PasswordRestoreComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
