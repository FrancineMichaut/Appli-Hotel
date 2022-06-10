import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquagymComponent } from './aquagym.component';

describe('AquagymComponent', () => {
  let component: AquagymComponent;
  let fixture: ComponentFixture<AquagymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquagymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquagymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
