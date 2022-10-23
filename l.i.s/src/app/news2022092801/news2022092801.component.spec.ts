import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092801Component } from './news2022092801.component';

describe('News2022092801Component', () => {
  let component: News2022092801Component;
  let fixture: ComponentFixture<News2022092801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092801Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
