import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202211Component } from './news202211.component';

describe('News202211Component', () => {
  let component: News202211Component;
  let fixture: ComponentFixture<News202211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202211Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
