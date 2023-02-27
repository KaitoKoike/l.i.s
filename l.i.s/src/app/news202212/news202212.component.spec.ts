import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202212Component } from './news202212.component';

describe('News202212Component', () => {
  let component: News202212Component;
  let fixture: ComponentFixture<News202212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202212Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
