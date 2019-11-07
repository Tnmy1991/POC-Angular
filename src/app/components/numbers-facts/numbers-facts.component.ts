import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumbersFactsApiService } from '../../services/numbers-facts-api.service';

@Component({
  selector: 'app-numbers-facts',
  templateUrl: './numbers-facts.component.html',
  styleUrls: ['./numbers-facts.component.css']
})
export class NumbersFactsComponent implements OnInit {

  public showLoader: boolean = false;
  public showResult: boolean = false;
  public factMode: string = '';
  public formTitle: string;
  public placeholder: string;
  public dayMonthFields: any;
  public numberField: any;
  public response: any;

  constructor( private provider: NumbersFactsApiService ) { }

  ngOnInit() {
    this.numberField = new FormControl( this.numberField, [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern('^[0-9]*$')
    ] );

    this.dayMonthFields = new FormGroup({
      day: new FormControl(''),
      month: new FormControl(''),
    });
  }

  setFactMode( mode: string ) {
    this.showResult = false;
    this.factMode = mode;
    switch (mode) {
      case 'math':
        this.formTitle = 'Get a mathematical property about a number';
        this.placeholder = 'Enter a number';
        break;
    
      case 'trivia':
        this.formTitle = 'Get a trivia fact about a number';
        this.placeholder = 'Enter a number';
        break;
      
      case 'year':
        this.formTitle = 'Get a fact about a year';
        this.placeholder = 'Enter a year';
        break;
    }
  }

  getRandomFact() {
    this.getFacts('random/trivia')
  }

  submitDayMonthFields() {
    this.getFacts( this.dayMonthFields.value.month + '/' + this.dayMonthFields.value.day + '/' + this.factMode )
  }

  submitNumberField() {
    this.getFacts( this.numberField.value + '/' + this.factMode )
  }

  getFacts( factQuery: string ) {
    this.showLoader = true;
    this.provider.getNumbersFacts( factQuery ).subscribe((res: any) => {
      this.response = res;
      this.showResult = true;
      this.showLoader = false;
    });
  }

}
