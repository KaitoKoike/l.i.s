import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMilanoComponent } from './smilano.component';

describe('SMilanoComponent', () => {
  let component: SMilanoComponent;
  let fixture: ComponentFixture<SMilanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMilanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMilanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
