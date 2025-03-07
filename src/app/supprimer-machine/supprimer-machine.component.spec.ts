import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerMachineComponent } from './supprimer-machine.component';

describe('SupprimerMachineComponent', () => {
  let component: SupprimerMachineComponent;
  let fixture: ComponentFixture<SupprimerMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
