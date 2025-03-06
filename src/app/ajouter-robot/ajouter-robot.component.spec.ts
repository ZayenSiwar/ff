import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRobotComponent } from './ajouter-robot.component';

describe('AjouterRobotComponent', () => {
  let component: AjouterRobotComponent;
  let fixture: ComponentFixture<AjouterRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterRobotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
