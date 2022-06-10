import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoBarComponent } from './piano-bar.component';

describe('PianoBarComponent', () => {
  let component: PianoBarComponent;
  let fixture: ComponentFixture<PianoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
