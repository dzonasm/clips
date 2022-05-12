import { Component, Input, OnInit } from '@angular/core';
import { TOAST_TYPE } from '../enums/toas-type.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() bgColor: TOAST_TYPE = TOAST_TYPE.ALERT;

  constructor() {}

  ngOnInit(): void {}
}
