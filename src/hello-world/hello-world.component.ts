import {Component, ElementRef, NgModule, ViewChild} from '@angular/core';

import {msg} from '../lib/file';

@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world-styles.css']
})
export class HelloWorldComponent {
  name: string = msg;
  @ViewChild('chart') public chartContainer: ElementRef;
  private chart: any;

  ngAfterViewInit() {
    const element = this.chartContainer.nativeElement;

    this.chart = d3.select(element)
                     .select('svg')
                     .attr('width', element.offsetWidth)
                     .attr('height', element.offsetWidth)
                     .select('g')
                     .append('circle')
                     .attr('class', 'node')
                     .attr('cy', 10)
                     .attr('cx', 10)
                     .attr('r', 10)
                     .style('stroke', 'gray');
  }
}
