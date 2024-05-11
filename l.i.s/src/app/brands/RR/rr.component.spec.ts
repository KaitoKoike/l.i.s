import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRComponent } from './rr.component';

describe('StefanoComponent', () => {
  let component: RRComponent;
  let fixture: ComponentFixture<RRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
