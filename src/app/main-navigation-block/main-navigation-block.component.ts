import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation-block',
  templateUrl: './main-navigation-block.component.html',
  styleUrls: ['./main-navigation-block.component.scss']
})
export class MainNavigationBlockComponent implements OnInit {

  modalOpen = true;

  constructor() { }

  ngOnInit() {
  }

}
