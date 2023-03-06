import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRountingModule } from './app-rounting.module';
import { AutenticacionModule } from './modules/autenticacion-module/autenticacion.module';
import { CoreModule } from './modules/core-module/core.module';
import { SharedModule } from './modules/shared-module/shared.module';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRountingModule,
    CoreModule,
    AutenticacionModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
