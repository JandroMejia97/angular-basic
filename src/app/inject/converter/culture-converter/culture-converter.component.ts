import { Component, OnInit } from '@angular/core';
import { CultureConverterService } from '../culture-converter.service';

@Component({
  selector: 'app-culture-converter',
  templateUrl: './culture-converter.component.html',
  styles: []
})
export class CultureConverterComponent implements OnInit {
  public source: string;
  public target: string;
  public sourceUnits: number = 0;
  public targetUnits: number;

  constructor(private cultureConverterService: CultureConverterService) { }

  ngOnInit() {
    this.source = this.cultureConverterService.sourceCulture;
    this.target = this.cultureConverterService.targetCulture;
  }

  public convert(){
    this.targetUnits = this.cultureConverterService.convertDistance(this.sourceUnits)
  }

}
