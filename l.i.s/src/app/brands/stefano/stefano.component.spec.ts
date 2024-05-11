import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StefanoComponent } from './stefano.component';

describe('StefanoComponent', () => {
  let component: StefanoComponent;
  let fixture: ComponentFixture<StefanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StefanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StefanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
