import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GreenhouseService} from '../greenhouse.service';

@Component({
  templateUrl: 'greenhouse.edit.component.html'
})
export class GreenhouseEditComponent implements OnInit  {
  id: number;
  greenhouse$: any;

  constructor(
    private route: ActivatedRoute,
    private greenHouseService: GreenhouseService,
    private router: Router
  ) {}

  async ngOnInit() {
    const greenhouseId = Number(this.route.snapshot.paramMap.get('id'));
    this.greenhouse$ = this.greenHouseService.getGreenHouse(greenhouseId);
    if (!greenhouseId) {
      await this.router.navigate(['404']);
    }
  }
}
