import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomomotusComponent } from './momomotus.component';

describe('MomomotusComponent', () => {
  let component: MomomotusComponent;
  let fixture: ComponentFixture<MomomotusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomomotusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomomotusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
