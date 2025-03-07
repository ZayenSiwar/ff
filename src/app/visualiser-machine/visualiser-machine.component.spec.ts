import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserMachineComponent } from './visualiser-machine.component';

describe('VisualiserMachineComponent', () => {
  let component: VisualiserMachineComponent;
  let fixture: ComponentFixture<VisualiserMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualiserMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualiserMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
