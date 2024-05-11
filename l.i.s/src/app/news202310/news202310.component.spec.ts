import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202310Component } from './news202310.component';

describe('News202310Component', () => {
  let component: News202310Component;
  let fixture: ComponentFixture<News202310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202310Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
