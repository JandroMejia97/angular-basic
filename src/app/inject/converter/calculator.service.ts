import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  public fromKilometersToMiles = km => km * 0.62137;
  public fromMilesToKilometers = miles => miles / 0.62137;
  public fromCelsiusToFarenheit = celsius => celsius * (9 / 5) +32;
  public fromFarenheitToCelsius = farenheit => (farenheit - 32) * (5 / 9);
}
