import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgConfirmationComponent } from './pkg-confirmation.component';

describe('PkgConfirmationComponent', () => {
  let component: PkgConfirmationComponent;
  let fixture: ComponentFixture<PkgConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
