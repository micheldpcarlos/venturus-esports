import { Component, OnInit } from '@angular/core';
import { BreadcrumbConfig } from './models/breadcrumb.model';
import { text } from '@fortawesome/fontawesome-svg-core';
import { SportsService } from './services/sports.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public breadcrumbConfig = breadcrumbConfig;

  constructor(private sportsService: SportsService) {

  }

  ngOnInit() {
    this.sportsService.getTableData().subscribe(res => console.log(res));
  }
}



export const breadcrumbConfig : BreadcrumbConfig = {
  showIcon: true,
  urlFragments: [
    { fragment: 'page-name', text: 'Page Name' },
    { fragment: 'breadcrumb', text: 'Breadcrumb' },
    { fragment: 'current-page', text: 'Current Page' }
  ]
}
