import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbsOfADayComponent } from './climbs-of-a-day.component';

describe('ClimbsOfADayComponent', () => {
  let component: ClimbsOfADayComponent;
  let fixture: ComponentFixture<ClimbsOfADayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbsOfADayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbsOfADayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
