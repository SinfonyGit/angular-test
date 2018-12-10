import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfonyUiComponent } from './sinfony-ui.component';

describe('SinfonyUiComponent', () => {
  let component: SinfonyUiComponent;
  let fixture: ComponentFixture<SinfonyUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinfonyUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinfonyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
