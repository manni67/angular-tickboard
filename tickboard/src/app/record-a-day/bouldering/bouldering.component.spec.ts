import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulderingComponent } from './bouldering.component';

describe('BoulderingComponent', () => {
  let component: BoulderingComponent;
  let fixture: ComponentFixture<BoulderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoulderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoulderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
