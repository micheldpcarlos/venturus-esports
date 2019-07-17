import { Component } from '@angular/core';
import { BreadcrumbConfig } from './models/breadcrumb.model';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public breadcrumbConfig: BreadcrumbConfig = {
    showIcon: true,
    urlFragments: [
      { fragment: 'page-name', text: 'Page Name' },
      { fragment: 'breadcrumb', text: 'Breadcrumb' },
      { fragment: 'current-page', text: 'Current Page' }
    ]
  }
}
