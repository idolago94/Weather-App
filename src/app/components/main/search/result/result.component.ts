import { Component, OnInit, Input } from '@angular/core';
import { RIGHT_CHEVRON } from 'src/assets/variables';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() details: any;

  chevronIcon = RIGHT_CHEVRON;

  constructor() { }

  ngOnInit() {
  }

}
