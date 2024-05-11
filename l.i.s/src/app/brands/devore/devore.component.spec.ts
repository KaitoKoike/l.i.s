import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoreComponent } from './devore.component';

describe('TopPageComponent', () => {
  let component: DevoreComponent;
  let fixture: ComponentFixture<DevoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
