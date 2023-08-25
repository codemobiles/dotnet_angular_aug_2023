import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  public lineChartData?: ChartConfiguration<'line'>['data'];
  public lineChartOptions!: ChartOptions<'line'>;
  public lineChartLegend = true;

  public barChartData?: ChartConfiguration<'bar'>['data'];
  public barChartOptions!: ChartOptions<'bar'>;
  public barChartLegend = true;

  constructor() {}

  ngOnInit() {
    this.setupLineChart();
    this.setupBarChart();
  }

  getGradientBackground(ctx: any, mainColor: String) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 500);
    gradient.addColorStop(0, mainColor);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
    return gradient;
  }

  setupLineChart() {
    const canvasElement = <HTMLCanvasElement>(
      document.getElementById('lineChart')
    );
    if (!canvasElement) return;

    const ctx = canvasElement.getContext('2d');

    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          fill: true,
          tension: 0.5,
          borderColor: 'rgba(0, 123, 255, 1)',
          backgroundColor: this.getGradientBackground(
            ctx,
            'rgba(0, 123, 255, 1)'
          ),
        },
        {
          data: [75, 99, 100, 151, 86, 75, 60],
          label: 'Series B',
          fill: true,
          tension: 0.5,
          borderColor: 'rgba(0, 223, 255, 1)',
          backgroundColor: this.getGradientBackground(
            ctx,
            'rgba(0, 223, 255, 1)'
          ),
        },
      ],
    };
    this.lineChartOptions = {
      responsive: false,
    };
  }

  setupBarChart() {
    const canvasElement = <HTMLCanvasElement>(
      document.getElementById('barChart')
    );
    if (!canvasElement) return;

    const ctx = canvasElement.getContext('2d');

    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          borderColor: 'rgba(0, 123, 255, 1)',
          backgroundColor: [
            'rgba(0, 123, 255, 1)',
            'rgba(0, 223, 255, 1)',
            'rgba(0, 223, 55, 1)',
          ],
        },
      ],
    };
    this.barChartOptions = {
      responsive: false,
    };
  }
}
