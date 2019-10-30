import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WordsApiService } from '../../services/words-api.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor( private serviceProvider: WordsApiService ) { }

  wordField: any;
  response: any;
  relatedWord: string;
  showLoader: boolean = false;

  ngOnInit() {
    this.wordField = new FormControl( this.wordField, [
      Validators.required,
      Validators.minLength(2)
    ] );
  }

  searchWordsAPI() {
    this.showLoader = true;
    this.serviceProvider.relatedWordApi( this.wordField.value, this.relatedWord ).subscribe((res: any) => {
      this.response = res;
      this.showLoader = false;
    });
  }

  searchMode( mode: string ) {
    this.relatedWord = mode;
  }

}
