import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202308Component } from './news202308.component';

describe('News202308Component', () => {
  let component: News202308Component;
  let fixture: ComponentFixture<News202308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202308Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
