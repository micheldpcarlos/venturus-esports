import { text } from '@fortawesome/fontawesome-svg-core';

export interface BreadcrumbConfig {
  urlFragments: UrlFragment[],
  showIcon: boolean,
}

export interface UrlFragment {
  fragment: string,
  text: string
}