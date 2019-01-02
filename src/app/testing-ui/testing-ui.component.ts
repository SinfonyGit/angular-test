import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-ui',
  templateUrl: './testing-ui.component.html',
  styleUrls: ['./testing-ui.component.scss']
})
export class TestingUiComponent implements OnInit {

  showFiller = false;
  url = 'www.google.si';
  tabela: any[] = [
    {
      'link': '',
      'tooltipName': 'Dashboard',
      'iconName': 'star',

    },
    {
      'tooltipName': 'Items',
      'iconName': 'coffee',

    },
    
    {
      'tooltipName': 'Forme',
      'iconName': 'cog' }
];

/* tabela: any[] = [
  { 'link': '/../items', 'tooltipName': 'Items', 'IconType': 'fas', 'iconName': 'coffee' },
  { 'link': '', 'tooltipName': 'Dashboard', 'IconType': 'fas', 'iconName': 'star' },
  { 'link': '/../forms', 'tooltipName': 'Forme', 'IconType': 'fas', 'iconName': 'cog' }
]; */

/* @Input() items = '';
@Input() IconName = '';
@Input() IconType = '';
@Input() link = '';
@Input() tooltipName = ''; */

  constructor() { }

  ngOnInit() {
  }

}
