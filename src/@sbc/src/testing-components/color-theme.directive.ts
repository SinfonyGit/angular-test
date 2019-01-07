import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[sbcColorTheme]'
})
export class ColorThemeDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('click') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
    this.color = this.backgroundColor = this.possibleColors[colorPick];
  }

}
