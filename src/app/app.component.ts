import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('userInput') userInput;
  luckyNumber = 19;
  inputCounter = 0;
  success:boolean = false;

  getInputValue() {
    this.success = false;
    const inputVal = +this.userInput.nativeElement.value;
    this.inputCounter++;
    if (this.inputCounter <= 3) {
      if (inputVal === this.luckyNumber) {
        this.success = true;
      }
    }
  }
}
