import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates/rates.component';
import { ObservatesComponent } from './observates/observates.component';
import { AuditInterceptorService } from './audit-interceptor.service';


@NgModule({
  declarations: [RatesComponent, ObservatesComponent],
  imports: [
    CommonModule,
    RatesRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditInterceptorService,
      multi: true
    }
  ]
})
export class RatesModule { }
