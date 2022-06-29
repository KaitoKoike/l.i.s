import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandComponentsComponent } from './brand-components.component';

describe('BrandComponentsComponent', () => {
  let component: BrandComponentsComponent;
  let fixture: ComponentFixture<BrandComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
