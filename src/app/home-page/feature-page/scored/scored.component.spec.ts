import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoredComponent } from './scored.component';

describe('ScoredComponent', () => {
  let component: ScoredComponent;
  let fixture: ComponentFixture<ScoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScoredComponent]
    });
    fixture = TestBed.createComponent(ScoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
