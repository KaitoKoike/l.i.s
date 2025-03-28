import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News20250302Component } from './news20250302.component';

describe('News20250302Component', () => {
  let component: News20250302Component;
  let fixture: ComponentFixture<News20250302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News20250302Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News20250302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
