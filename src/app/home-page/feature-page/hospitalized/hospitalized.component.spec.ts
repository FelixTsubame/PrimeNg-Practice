import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizedComponent } from './hospitalized.component';

describe('HospitalizedComponent', () => {
  let component: HospitalizedComponent;
  let fixture: ComponentFixture<HospitalizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HospitalizedComponent]
    });
    fixture = TestBed.createComponent(HospitalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
