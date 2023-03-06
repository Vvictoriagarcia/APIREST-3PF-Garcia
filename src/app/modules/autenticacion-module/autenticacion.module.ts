import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoginComponent],
})
export class AutenticacionModule {}
