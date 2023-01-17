import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbsOfAGradeComponent } from './climbs-of-a-grade.component';

// Comment B
describe('ClimbsOfAGradeComponent', () => {
  let component: ClimbsOfAGradeComponent;
  let fixture: ComponentFixture<ClimbsOfAGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbsOfAGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbsOfAGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
