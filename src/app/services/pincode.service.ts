import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  url = "http://localhost:3000/pincode";
  constructor(
    public _http: HttpClient
  ) { }
  getPincodes(): Observable<customPincode[]> {
    return this._http.get<Pincode[]>(this.url).pipe(
      map((res: Pincode[]) => {
        // console.log(res);
        let pincodes: customPincode[] = [];
        for (let x of res) {
          let object: customPincode = {
            State: x.StateName,
            Region: x['Region Name'],
            Division: x['Division Name'],
            District: x.District,
            Office: x['Office Name'],
            Pincode: x.Pincode,
          }
          pincodes.push(object);
        }
        return pincodes;
      })
    );
  }
}

// export interface Pincode {
// Circle: string;
// Region: string;
// Division: string;
// Office: string;
// Pincode: string;
// OfficeType: string;
// Delivery: string;
// District: string;
// State: string;
// }
export class customPincode {
  State: string;
  Region: string;
  Division: string;
  District: string;
  Office: string;
  Pincode: string;
}
export interface Pincode {
  "Circle Name": string;
  "Region Name": string;
  "Division Name": string;
  "Office Name": string;
  Pincode: string;
  OfficeType: string;
  Delivery: string;
  District: string;
  StateName: string;
}
