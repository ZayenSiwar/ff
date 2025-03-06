import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerRobotComponent } from './supprimer-robot.component';

describe('SupprimerRobotComponent', () => {
  let component: SupprimerRobotComponent;
  let fixture: ComponentFixture<SupprimerRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerRobotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
