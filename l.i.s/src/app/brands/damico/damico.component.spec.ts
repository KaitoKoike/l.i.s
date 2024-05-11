import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamicoComponent } from './damico.component';

describe('DamicoComponent', () => {
  let component: DamicoComponent;
  let fixture: ComponentFixture<DamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
