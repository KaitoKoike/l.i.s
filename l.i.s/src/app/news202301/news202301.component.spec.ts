import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202301Component } from './news202301.component';

describe('News202301Component', () => {
  let component: News202301Component;
  let fixture: ComponentFixture<News202301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202301Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
