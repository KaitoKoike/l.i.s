import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202210Component } from './news202210.component';

describe('News202210Component', () => {
  let component: News202210Component;
  let fixture: ComponentFixture<News202210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202210Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
