import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',

        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },

      {
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        label: 'Series B',

        borderColor: 'yellow',
        backgroundColor: 'rgba(255,255,0,0.3)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
