import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UrlShortenerApiService } from '../../services/url-shortener-api.service'

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  public urlField: any;
  public response: any;
  public showLoader: boolean = false;
  public showResult: boolean = false;

  constructor( private provider: UrlShortenerApiService ) {
    this.urlField = new FormControl( this.urlField, [
      Validators.required
    ]);
  }

  ngOnInit() {
  }

  submitUrl() {
    var body = {
      "url": this.urlField.value
    };

    this.showLoader = true;
    this.showResult = false;
    this.provider.getShortenUrl( body ).subscribe( res => {
      this.response = res;
      this.showResult = true;
      this.showLoader = false;
    });
  }

  copyMessage() {
    let textarea = null;
    textarea = document.createElement("textarea");
    textarea.style.height = "0px";
    textarea.style.left = "-100px";
    textarea.style.opacity = "0";
    textarea.style.position = "fixed";
    textarea.style.top = "-100px";
    textarea.style.width = "0px";
    document.body.appendChild(textarea);
    // Set and select the value (creating an active Selection range).
    textarea.value = this.response.result_url;
    textarea.select();
    // Ask the browser to copy the current selection to the clipboard.
    let successful = document.execCommand("copy");
    if (successful) {
      alert("Copied");
    } else {
      alert("Unable to copy in clipboard!");
    }
    if (textarea && textarea.parentNode) {
      textarea.parentNode.removeChild(textarea);
    }
  }

}
