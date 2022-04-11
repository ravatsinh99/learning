import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PincodeService } from './pincode.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any>{

  constructor(
    public pincodeService: PincodeService
  ) { }
  resolve() {
    return this.pincodeService.getPincodes();
  }
}
