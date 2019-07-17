import { Component, OnInit, Input } from '@angular/core';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { BreadcrumbConfig } from '../../models/breadcrumb.model'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {


  faHome = faHome;
  faChevronRight = faChevronRight;

  @Input() breadcrumbConfig: BreadcrumbConfig;

  constructor() { }

  ngOnInit() { }

}
