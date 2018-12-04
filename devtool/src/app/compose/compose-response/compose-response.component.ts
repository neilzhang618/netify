import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-compose-response',
  templateUrl: './compose-response.component.html',
  styleUrls: ['./compose-response.component.css'],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class ComposeResponseComponent implements OnInit {

	@Input() fieldSet: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
