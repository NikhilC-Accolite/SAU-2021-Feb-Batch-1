import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-box-logging',
  templateUrl: './text-box-logging.component.html',
  styleUrls: ['./text-box-logging.component.css']
})
export class TextBoxLoggingComponent implements OnInit {
  text;
  @Output('textchange') textchange = new EventEmitter<any>();
  constructor() { 
    this.text = "Enter text in the above Box";
  }

  ngOnInit(): void {
  }

  textChanged(event : any)
  {
    this.text = event.target.value;
    if(this.text === ""){
      this.text = "Enter text in the above Box";
    }
    this.textchange.emit(this.text);
  }

}
