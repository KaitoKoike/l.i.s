import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreasComponent } from './andreas.component';

describe('AndreasComponent', () => {
  let component: AndreasComponent;
  let fixture: ComponentFixture<AndreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
