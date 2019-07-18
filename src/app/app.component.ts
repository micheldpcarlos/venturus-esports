import { Component, OnInit } from '@angular/core';
import { BreadcrumbConfig } from './models/breadcrumb.model';
import { TableDataService } from './services/table-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public breadcrumbConfig = breadcrumbConfig;

  constructor(private tableDataService: TableDataService) {
    
  }

  ngOnInit() {
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
