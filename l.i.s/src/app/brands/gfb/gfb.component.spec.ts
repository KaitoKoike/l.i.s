import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GFBComponent } from './gfb.component';

describe('GFBComponent', () => {
  let component: GFBComponent;
  let fixture: ComponentFixture<GFBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GFBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
