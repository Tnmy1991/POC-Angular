import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmailValidationApiService } from '../../services/email-validation-api.service';

@Component({
  selector: 'app-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.css']
})
export class EmailValidatorComponent implements OnInit {

  emailValidator: any;
  response: any;
  baseClass: string;
  emailAddress: string;
  showResult: boolean = false;
  showLoader: boolean = false;

  constructor( private serviceProvider: EmailValidationApiService ) { }

  ngOnInit() {
    this.emailValidator = new FormControl( this.emailValidator, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]\+.[a-zA-Z]{2,4}$')
    ] );
  }

  verifyEmail() {
    this.showLoader = true;
    this.serviceProvider.validateEmail(this.emailValidator.value).subscribe((res: any) => {
      this.response = res;
      this.baseClass = res.isValid ? 'panel-success' : 'panel-error';
      this.showResult = true;
      this.showLoader = false;
    });
  }

  checkAgain() {
    this.showResult = false;
  }

}
