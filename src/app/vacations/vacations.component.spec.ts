import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsComponent } from './Vacations.component';

describe('VacationsComponent', () => {
  let component: VacationsComponent;
  let fixture: ComponentFixture<VacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
