import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'greenhouse-create.component.html'
})
export class GreenhouseCreateComponent implements OnInit  {
  id: number;

  constructor(
    private router: Router
  ) {}

  async ngOnInit() {
  }
}
