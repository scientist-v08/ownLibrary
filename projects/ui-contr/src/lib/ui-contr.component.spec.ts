import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContrComponent } from './ui-contr.component';

describe('UiContrComponent', () => {
  let component: UiContrComponent;
  let fixture: ComponentFixture<UiContrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UiContrComponent]
    });
    fixture = TestBed.createComponent(UiContrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
