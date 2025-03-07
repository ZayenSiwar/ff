import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserRobotComponent } from './visualiser-robot.component';

describe('VisualiserRobotComponent', () => {
  let component: VisualiserRobotComponent;
  let fixture: ComponentFixture<VisualiserRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualiserRobotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualiserRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
