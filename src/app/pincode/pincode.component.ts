import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customPincode, PincodeService } from '../services/pincode.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {

  columnsName: string[] = [
    'State',
    'Region',
    'Division',
    'District',
    'Office',
    'Pincode'
  ];
  pincodeList: customPincode[] = []
  constructor(
    public $activateRout: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPincodes();
  }
  // get list of pincode
  getPincodes() {
    this.pincodeList = this.$activateRout.snapshot.data['data'];
    // console.log(data);
    // this.pincodeService.getPincodes().subscribe(
    //   {
    //     next: (res) => {
    //       this.pincodeList = res;
    //       console.log(res);
    //     },
    //     error: (err: HttpErrorResponse) => console.error(err),
    //   })
  }

}
