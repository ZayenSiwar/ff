import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRobotComponent } from './modifier-robot.component';

describe('ModifierRobotComponent', () => {
  let component: ModifierRobotComponent;
  let fixture: ComponentFixture<ModifierRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierRobotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
