import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuffoComponent } from './ruffo.component';

describe('RuffoComponent', () => {
  let component: RuffoComponent;
  let fixture: ComponentFixture<RuffoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuffoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuffoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
