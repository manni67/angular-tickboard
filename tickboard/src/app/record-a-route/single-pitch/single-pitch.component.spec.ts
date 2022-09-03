import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePitchComponent } from './single-pitch.component';

describe('SinglePitchComponent', () => {
  let component: SinglePitchComponent;
  let fixture: ComponentFixture<SinglePitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
