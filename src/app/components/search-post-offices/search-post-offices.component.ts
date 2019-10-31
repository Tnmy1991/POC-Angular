import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PinCodesApiService } from '../../services/pin-codes-api.service';

@Component({
  selector: 'app-search-post-offices',
  templateUrl: './search-post-offices.component.html',
  styleUrls: ['./search-post-offices.component.css']
})
export class SearchPostOfficesComponent implements OnInit {

  public pincodeField: any;
  public searchForm: any;
  public response: any;
  public showLoader: boolean = false;
  public showResult: boolean = false;
  public searchMode: string = '';

  constructor( private provider: PinCodesApiService ) { }

  ngOnInit() {
    this.pincodeField = new FormControl( this.pincodeField, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern('^[1-9][0-9]{5}$')
    ] );

    this.searchForm = new FormGroup({
      address: new FormControl(''),
      state_id: new FormControl(''),
    });

    this.searchForm.patchValue({
      state_id: ''
    });
  }

  setSearchMode( mode:string ) {
    this.searchMode = mode;
  }

  searchUsingPincode() {
    this.showLoader = true;
    var requestBody =  {
      "searchBy": "pincode",
      "value": this.pincodeField.value
    };
    this.provider.searchPostOffices( requestBody ).subscribe((res: any) => {
      this.response = res;
      this.showResult = true;
      this.showLoader = false;
    });
  }

  searchUsingAddress() {
    this.showLoader = true;
    var requestBody =  {
      "searchBy": "address",
      "state_id": this.searchForm.value.state_id,
      "value": this.searchForm.value.address
    };
    this.provider.searchPostOffices( requestBody ).subscribe((res: any) => {
      this.response = res;
      this.showResult = true;
      this.showLoader = false;
    });
  }

}
