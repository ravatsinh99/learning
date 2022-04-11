import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
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
    private ngxCsvParser: NgxCsvParser,
    public $activateRout:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPincodes();
  }
  // get list of pincode
  getPincodes() {
    this.pincodeList=this.$activateRout.snapshot.data['data'];
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


  // read csv file
  // readFile(event: any): void {
  //   if (event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     this.ngxCsvParser.parse(file, { header: true, delimiter: ',' })
  //       .pipe().subscribe({
  //         next: (result): void => {
  //           console.log('Result', result);
  //           // this.csvRecords = result;
  //         },
  //         error: (error: NgxCSVParserError): void => {
  //           console.log('Error', error);
  //         }
  //       });
  //   }


  // }

}
