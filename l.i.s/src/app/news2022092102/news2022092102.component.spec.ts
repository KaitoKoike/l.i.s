import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092102Component } from './news2022092102.component';

describe('News2022092102Component', () => {
  let component: News2022092102Component;
  let fixture: ComponentFixture<News2022092102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092102Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});