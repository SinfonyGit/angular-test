import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  Green = '#008000';

  tabela: any[] = [
    { 'link': '/../items', 'name': 'Itemsi' },
    { 'link': '', 'name': 'vstopna' },
];

  constructor() { }

  ngOnInit() {
  }

}
