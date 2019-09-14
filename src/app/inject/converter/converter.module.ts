import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter/converter.component';
import { CultureConverterComponent } from './culture-converter/culture-converter.component';
import { CultureConverterService } from './culture-converter.service';
import { UsaConverterService } from './usa-converter.service';
import { CalculatorService } from './calculator.service';
import { environment } from '../../../environments/environment';
import { EuropeConverterService } from './europe-converter.service';

const cultureConverterFactory = (calculatorService: CalculatorService) => {
  if (environment.unitsCulture === 'metric') {
    return new EuropeConverterService(calculatorService);
  } else {
    return new UsaConverterService(calculatorService);
  }
}


@NgModule({
  declarations: [ConverterComponent, CultureConverterComponent],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: CultureConverterService,
      useFactory: cultureConverterFactory,
      deps: [CalculatorService]
    }
  ]
})
export class ConverterModule { }
