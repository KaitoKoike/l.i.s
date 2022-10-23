import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092101Component } from './news2022092101.component';

describe('News2022092101Component', () => {
  let component: News2022092101Component;
  let fixture: ComponentFixture<News2022092101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092101Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
