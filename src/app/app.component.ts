import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userInput') userInput;
  luckyNumber: number = 19; // hidden predefined number from user
  inputCounter: number = 0;
  success: boolean;

  getInputValue() {
    this.success = false;
    const inputVal = +this.userInput.nativeElement.value;
    if (inputVal !== 0) {
      this.inputCounter++;
      if (this.inputCounter <= 3) {
        if (inputVal === this.luckyNumber) {
          this.success = true;
          this.inputCounter = 0;
        } else{
          this.success = false;
        }
      }
    }
  }

  clearInputValue() {
    this.userInput.nativeElement.value = "";
    this.inputCounter = 0;
  }

  checkRange() {
    var input = this.userInput.nativeElement;
    if (!(input.value >= 1 && input.value <= 50)) {
      input.value = "";
    }
  }
}
