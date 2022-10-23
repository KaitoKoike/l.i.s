import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092402Component } from './news2022092402.component';

describe('News2022092402Component', () => {
  let component: News2022092402Component;
  let fixture: ComponentFixture<News2022092402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092402Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
