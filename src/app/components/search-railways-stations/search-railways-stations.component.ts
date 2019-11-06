import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchStationsApiService } from '../../services/search-stations-api.service';

@Component({
  selector: 'app-search-railways-stations',
  templateUrl: './search-railways-stations.component.html',
  styleUrls: ['./search-railways-stations.component.css']
})
export class SearchRailwaysStationsComponent implements OnInit {

  public searchField: any;
  public pnrStatusField: any;
  public response: any;
  public searchMode: string;
  public showLoader: boolean = false;
  public showResult: boolean = false;

  constructor( private provider: SearchStationsApiService ) { }

  ngOnInit() {
    this.searchField = new FormControl( this.searchField, [
      Validators.required,
      Validators.minLength(2)
    ]);

    this.pnrStatusField = new FormControl( this.pnrStatusField, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);
  }

  setSearchMode( mode:string ) {
    this.searchMode = mode;
  }

  searchStations() {
    this.showLoader = true;
    this.provider.searchRailwaysStations( this.searchField.value ).subscribe((res: any) => {
      this.response = res.stations;
      this.showResult = true;
      this.showLoader = false;
    });
  }

  checkStatus() {
    this.showLoader = true;
    this.provider.pnrStatusCheck( this.pnrStatusField.value ).subscribe((res: any) => {
      this.response = res;
      this.showResult = true;
      this.showLoader = false;
    });
  }

}
