import { Injectable } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class EuropeConverterService {
  sourceCulture: string = 'USA';
  targetCulture: string = 'Europa';

  constructor(private converterService: CalculatorService) { }

  public convertDistance = this.converterService.fromMilesToKilometers;
  public convertTemperature = this.converterService.fromFarenheitToCelsius;
}
