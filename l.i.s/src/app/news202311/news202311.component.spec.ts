import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202311Component } from './news202311.component';

describe('News202311Component', () => {
  let component: News202311Component;
  let fixture: ComponentFixture<News202311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202311Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
