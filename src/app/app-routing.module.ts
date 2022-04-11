import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PincodeComponent } from './pincode/pincode.component';
import { ResolveService } from './services/resolve.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/employee'
  }, {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'pincode',
    component: PincodeComponent,
    resolve: {
      data: ResolveService
     }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
