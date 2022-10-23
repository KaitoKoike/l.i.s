import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092301Component } from './news2022092301.component';

describe('News2022092301Component', () => {
  let component: News2022092301Component;
  let fixture: ComponentFixture<News2022092301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092301Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
