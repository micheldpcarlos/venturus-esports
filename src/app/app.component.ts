import { Component, OnInit } from '@angular/core';
import { BreadcrumbConfig } from './models/breadcrumb.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   slideInAnimation
  // ]
})
export class AppComponent {
  public breadcrumbConfig = breadcrumbConfig;

  constructor() {}
}



export const breadcrumbConfig : BreadcrumbConfig = {
  showIcon: true,
  urlFragments: [
    { fragment: 'page-name', text: 'Page Name' },
    { fragment: 'breadcrumb', text: 'Breadcrumb' },
    { fragment: 'current-page', text: 'Current Page' }
  ]
}
