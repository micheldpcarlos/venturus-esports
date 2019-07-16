import { Component, OnInit } from '@angular/core';

import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faVolleyballBall = faVolleyballBall;

  constructor() { 
  }

  ngOnInit() {
  }

}
