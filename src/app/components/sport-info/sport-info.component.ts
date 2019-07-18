import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sport-info',
  templateUrl: './sport-info.component.html',
  styleUrls: ['./sport-info.component.scss']
})
export class SportInfoComponent implements OnInit {

  faPuzzlePiece = faPuzzlePiece;
  constructor() { }

  ngOnInit() {
  }

}
