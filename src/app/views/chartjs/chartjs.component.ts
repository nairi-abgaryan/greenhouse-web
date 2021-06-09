import { Component } from '@angular/core';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {
  // lineChart
  public lineChartData: Array<any> = [
    {data: [-10, 4, 10, 20, 30, 32, 35], label: 'Օդի Ջերմաստիճան'},
    {data: [ 20, 21, 22, 23, 25, 30, 30], label: 'Հողի ջերմաստիճան'},
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#20a8d8',
      pointBackgroundColor: 'rgb(148,177,176)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [5000, 10000, 10000, 4000, 4000], label: 'Ծախսված գումար'},
    {data: [0, 0, 15000, 20000, 30000, 40000], label: 'Վաստակած Գումար'}
  ];

  public DataAirCondition: Array<any> = [
    {data: [ 0, 0, 2000, 3000, 5000, 6000, 7000, 4000, 0], label: 'Էլեկտրաէներգիայի գումար'},
  ];
  public LablesAirCondition: Array<any> = ['0', '0', '2', '3', '5', '6', '7', 4, 0];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
