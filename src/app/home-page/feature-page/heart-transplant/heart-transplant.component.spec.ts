import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartTransplantComponent } from './heart-transplant.component';

describe('HeartTransplantComponent', () => {
  let component: HeartTransplantComponent;
  let fixture: ComponentFixture<HeartTransplantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeartTransplantComponent]
    });
    fixture = TestBed.createComponent(HeartTransplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
