import { Component, OnInit } from '@angular/core';
import { faPuzzlePiece, faTrophy, faMapSigns, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sport-info',
  templateUrl: './sport-info.component.html',
  styleUrls: ['./sport-info.component.scss']
})
export class SportInfoComponent implements OnInit {

  private sportInfos: SportInfoItem[] = [
    {icon: faPuzzlePiece, description: 'Sport type', info: 'Cycling'},
    {icon: faTrophy, description: 'Mode', info: 'Advanced'},
    {icon: faMapSigns, description: 'Route', info: '30 miles'}
  ]
  constructor() { }

  ngOnInit() {
  }

}

export interface SportInfoItem {
  icon: IconDefinition,
  description: string,
  info: string
}
