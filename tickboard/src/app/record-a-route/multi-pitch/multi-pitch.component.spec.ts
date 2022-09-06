import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPitchComponent } from './multi-pitch.component';

describe('MultiPitchComponent', () => {
  let component: MultiPitchComponent;
  let fixture: ComponentFixture<MultiPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiPitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
