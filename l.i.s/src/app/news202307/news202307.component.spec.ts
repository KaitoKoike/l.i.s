import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202307Component } from './news202307.component';

describe('News202307Component', () => {
  let component: News202307Component;
  let fixture: ComponentFixture<News202307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202307Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
