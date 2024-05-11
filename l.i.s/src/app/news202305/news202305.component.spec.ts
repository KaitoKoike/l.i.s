import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News202305Component } from './news202305.component';

describe('News202305Component', () => {
  let component: News202305Component;
  let fixture: ComponentFixture<News202305Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News202305Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News202305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
