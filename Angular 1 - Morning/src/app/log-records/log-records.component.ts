import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-records',
  templateUrl: './log-records.component.html',
  styleUrls: ['./log-records.component.css']
})
export class LogRecordsComponent implements OnInit {

  @Input('logRecords') logRecords : any;
  constructor() { }
  ngOnInit(): void {
  }

}
