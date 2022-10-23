import { ComponentFixture, TestBed } from '@angular/core/testing';

import { News2022092401Component } from './news2022092401.component';

describe('News2022092401Component', () => {
  let component: News2022092401Component;
  let fixture: ComponentFixture<News2022092401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ News2022092401Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(News2022092401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
