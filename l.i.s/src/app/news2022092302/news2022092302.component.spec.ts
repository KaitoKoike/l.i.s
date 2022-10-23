import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092302Component } from './news2022092302.component';

describe('News2022092302Component', () => {
  let component: News2022092302Component;
  let fixture: ComponentFixture<News2022092302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092302Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
