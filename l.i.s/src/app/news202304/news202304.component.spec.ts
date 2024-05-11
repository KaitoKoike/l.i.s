import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202304Component } from './news202304.component';

describe('News202304Component', () => {
  let component: News202304Component;
  let fixture: ComponentFixture<News202304Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202304Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
