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
import {RouterModule} from "@angular/router";
import { AuthGuard } from "./services/auth/auth.guard";
import {FormsModule} from "@angular/forms";

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
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DataService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
