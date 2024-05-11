import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202303Component } from './news202303.component';

describe('News202303Component', () => {
  let component: News202303Component;
  let fixture: ComponentFixture<News202303Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202303Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
