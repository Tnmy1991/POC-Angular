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
  public response: any;
  public showLoader: boolean = false;
  public showResult: boolean = false;

  constructor( private provider: SearchStationsApiService ) { }

  ngOnInit() {
    this.searchField = new FormControl( this.searchField, [
      Validators.required,
      Validators.minLength(2)
    ]);
  }

  searchStations() {
    this.showLoader = true;
    var requestBody =  {
      "search": this.searchField.value
    };

    this.provider.searchRailwaysStations( requestBody ).subscribe((res: any) => {
      this.response = res;
      this.showResult = true;
      this.showLoader = false;
    });
  }

}
