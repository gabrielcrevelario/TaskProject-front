import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss']
})
export class CustomCheckboxComponent implements OnInit {

  constructor() { }
  yes:boolean
  not:boolean= false;
  ngOnInit() {
  }

}
