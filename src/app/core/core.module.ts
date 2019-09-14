import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TemporalModule } from '../temporal/temporal.module';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemporalModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
