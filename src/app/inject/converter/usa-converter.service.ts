import { Injectable } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class UsaConverterService {
  sourceCulture = 'Europe';
  targetCulture = 'USA';

  constructor(private converterService: CalculatorService) { }

  public convertDistance = this.converterService.fromKilometersToMiles;
  public convertTemperature = this.converterService.fromCelsiusToFarenheit;
}
