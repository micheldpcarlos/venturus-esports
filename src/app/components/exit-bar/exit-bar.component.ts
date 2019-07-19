import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exit-bar',
  templateUrl: './exit-bar.component.html',
  styleUrls: ['./exit-bar.component.scss']
})
export class ExitBarComponent implements OnInit {

  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit() {
  }

}
