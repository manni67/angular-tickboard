import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpineClimbingComponent } from './alpine-climbing.component';

describe('AlpineClimbingComponent', () => {
  let component: AlpineClimbingComponent;
  let fixture: ComponentFixture<AlpineClimbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpineClimbingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpineClimbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
