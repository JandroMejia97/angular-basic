import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class CultureConverterService {
  sourceCulture: string;
  targetCulture: string;
  convertDistance: (source: number) => number;
  convertTemperature: (source: number) => number;

  constructor() { }
}
