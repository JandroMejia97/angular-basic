import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: []
})
export class DisplayComponent implements OnInit {
  @Input() public model: string;
  @Input() public currentSpeed: number;
  @Input() public topSpeed: number;
  @Input() public units: string;

  constructor() { }

  ngOnInit() {
  }

  public getSpeedClass = () => {
    return this.currentSpeed < this.getThreshold() ? 'primary': 'secondary'
  }

  private getThreshold = () => {
    return this.topSpeed * 0.8;
  }

}
