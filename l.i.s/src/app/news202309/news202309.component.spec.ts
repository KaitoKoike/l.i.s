import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202309Component } from './news202309.component';

describe('News202309Component', () => {
  let component: News202309Component;
  let fixture: ComponentFixture<News202309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202309Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
