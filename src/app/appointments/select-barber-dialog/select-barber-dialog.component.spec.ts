import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBarberDialogComponent } from './select-barber-dialog.component';

describe('SelectBarberDialogComponent', () => {
  let component: SelectBarberDialogComponent;
  let fixture: ComponentFixture<SelectBarberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBarberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBarberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
