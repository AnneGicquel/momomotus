import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFirstNameComponent } from './fill-first-name.component';

describe('FillFirstNameComponent', () => {
  let component: FillFirstNameComponent;
  let fixture: ComponentFixture<FillFirstNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFirstNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillFirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
