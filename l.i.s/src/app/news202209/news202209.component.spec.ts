import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202209Component } from './news202209.component';

describe('News202209Component', () => {
  let component: News202209Component;
  let fixture: ComponentFixture<News202209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202209Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
