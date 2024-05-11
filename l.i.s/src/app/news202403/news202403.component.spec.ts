import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202403Component } from './news202403.component';

describe('News202403Component', () => {
  let component: News202403Component;
  let fixture: ComponentFixture<News202403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202403Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
