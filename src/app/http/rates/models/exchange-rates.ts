import { Rates } from './rates';

export interface ExchangeRates {
  base, date: string;
  rates: Rates;
}
