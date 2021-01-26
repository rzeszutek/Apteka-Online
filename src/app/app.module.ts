import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { MedicineItemComponent } from './components/medicine-item/medicine-item.component';
import { MedicineItemDetailsComponent } from './components/medicine-item-details/medicine-item-details.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from "./services/data/data.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TruncatePipe } from './pipes/truncate.pipe';
import { AuthService } from "./services/auth/auth.service";
import { AuthInterceptor } from "./services/auth/auth.interceptor";
import { AuthGuard } from "./services/auth/auth.guard";
import { FormsModule } from "@angular/forms";
import { EquipmentItemComponent } from './components/equipment-item/equipment-item.component';
import { EquipmentItemDetailsComponent } from './components/equipment-item-details/equipment-item-details.component';
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { AddEquipmentComponent } from './components/add-equipment/add-equipment.component';
import { OrdersPanelComponent } from './components/orders-panel/orders-panel.component';
import { MatSelectModule } from "@angular/material/select";
import { MatDividerModule } from "@angular/material/divider";
import { MedicinesPanelComponent } from './components/medicines-panel/medicines-panel.component';
import { PasswordDialogComponent } from './components/dialogs/password-dialog/password-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { EquipmentPanelComponent } from './components/equipment-panel/equipment-panel.component';
import { UpdateEquipmentComponent } from './components/update-equipment/update-equipment.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatRadioModule } from "@angular/material/radio";
import { BankTransferComponent } from './components/bank-transfer/bank-transfer.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PasswordRestoreComponent } from './components/password-restore/password-restore.component';
import { UsersPanelComponent } from './components/users-panel/users-panel.component';
import { EmailSendDialogComponent } from './components/dialogs/email-send-dialog/email-send-dialog.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FormsPageComponent } from './components/forms-page/forms-page.component';
import { FormSendDialogComponent } from './components/dialogs/form-send-dialog/form-send-dialog.component';
import { FormsPanelComponent } from './components/forms-panel/forms-panel.component';
import { FormsDetailsComponent } from './components/forms-details/forms-details.component';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    MedicineComponent,
    MedicineItemComponent,
    MedicineItemDetailsComponent,
    PrescriptionComponent,
    EquipmentComponent,
    TruncatePipe,
    EquipmentItemComponent,
    EquipmentItemDetailsComponent,
    OrderComponent,
    OrderItemComponent,
    ControlPanelComponent,
    AddMedicineComponent,
    AddEquipmentComponent,
    OrdersPanelComponent,
    MedicinesPanelComponent,
    PasswordDialogComponent,
    UpdateMedicineComponent,
    EquipmentPanelComponent,
    UpdateEquipmentComponent,
    UserSettingsComponent,
    ConfirmationDialogComponent,
    BankTransferComponent,
    PasswordResetComponent,
    PasswordRestoreComponent,
    UsersPanelComponent,
    EmailSendDialogComponent,
    OrderDetailsComponent,
    FormsPageComponent,
    FormSendDialogComponent,
    FormsPanelComponent,
    FormsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatExpansionModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    PasswordDialogComponent
  ],
  providers: [
    DataService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
