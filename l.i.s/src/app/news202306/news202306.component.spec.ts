import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202306Component } from './news202306.component';

describe('News202306Component', () => {
  let component: News202306Component;
  let fixture: ComponentFixture<News202306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202306Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
