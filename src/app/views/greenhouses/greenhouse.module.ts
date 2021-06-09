import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { GreenhouseRoutingModule } from './greenhouse-routing.module';
import {GreenhouseService} from './greenhouse.service';
import {GreenhouseEditComponent} from './edit/greenhouse.edit.component';
import {GreenhouseListComponent} from './list/greenhouse.list.component';
import {GreenhouseCreateComponent} from './create/greenhouse-create.component';

@NgModule({
  imports: [
    GreenhouseRoutingModule,
    ChartsModule,
  ],
  providers: [GreenhouseService],
  declarations: [ GreenhouseListComponent, GreenhouseEditComponent, GreenhouseCreateComponent ]
})
export class GreenhouseModule { }
