import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WikiSynonymApiService } from '../../services/wiki-synonym-api.service';

@Component({
  selector: 'app-wiki-synonym',
  templateUrl: './wiki-synonym.component.html',
  styleUrls: ['./wiki-synonym.component.css']
})
export class WikiSynonymComponent implements OnInit {

  public termField: any;
  public response: any;
  public showLoader: boolean = false;
  public showResult: boolean = false;

  constructor( private provider: WikiSynonymApiService ) { 
    this.termField = new FormControl( this.termField, [
      Validators.required
    ] );
  }

  ngOnInit() {
  }

  submitTerm() {
    this.showLoader = true;
    this.showResult = false;

    this.provider.getWikiSynonym( this.termField.value ).subscribe(res => {
      this.response = res;
      this.showLoader = false;
      this.showResult = true;
    });
  }

}
