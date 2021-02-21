import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 1 Asssignment Accolite AU';
  question_1 = ' 1) Create a Input box, and log every character entered in the input box';
  question_2 = '2) Use property binding and event binding ';
  question_3 = '3) Use table to display the logs';
  questions = [this.question_1,this.question_2,this.question_3]

  logRecords : Array<any> = [];
  textChanged(text : any)
  {
    if(text != "" && text != "Enter text in the above Box")
    this.logRecords.push({key_up_at : new Date() ,text : text});
  }
}
