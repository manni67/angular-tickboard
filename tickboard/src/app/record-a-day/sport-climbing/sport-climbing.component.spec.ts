import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportClimbingComponent } from './sport-climbing.component';

describe('SportClimbingComponent', () => {
  let component: SportClimbingComponent;
  let fixture: ComponentFixture<SportClimbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportClimbingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportClimbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
