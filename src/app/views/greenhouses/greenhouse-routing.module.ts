import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GreenhouseListComponent} from './list/greenhouse.list.component';
import {GreenhouseEditComponent} from './edit/greenhouse.edit.component';
import {GreenhouseCreateComponent} from './create/greenhouse-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: GreenhouseCreateComponent,
    data: {
      title: 'Ջերմոցներ'
    }
  },
  {
    path: '',
    component: GreenhouseListComponent,
    data: {
      title: 'Ջերմոցներ'
    }
  },
  {
    path: ':id',
    component: GreenhouseEditComponent,
    data: {
      title: 'Ջերմոցներ',
    }
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreenhouseRoutingModule {}
