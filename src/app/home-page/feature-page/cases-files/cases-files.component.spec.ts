import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesFilesComponent } from './cases-files.component';

describe('CasesFilesComponent', () => {
  let component: CasesFilesComponent;
  let fixture: ComponentFixture<CasesFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CasesFilesComponent]
    });
    fixture = TestBed.createComponent(CasesFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
