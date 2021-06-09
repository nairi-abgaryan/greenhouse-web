import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { EquipmentsComponent } from './equipments.component';
import { EquipmentsRoutingModule } from './equipments-routing.module';

@NgModule({
  imports: [
    EquipmentsRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ EquipmentsComponent ]
})
export class EquipmentsModule { }
