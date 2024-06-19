import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronationComponent } from './coronation.component';

describe('CoronationComponent', () => {
  let component: CoronationComponent;
  let fixture: ComponentFixture<CoronationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoronationComponent]
    });
    fixture = TestBed.createComponent(CoronationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
