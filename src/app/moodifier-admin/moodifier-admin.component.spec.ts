import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodifierAdminComponent } from './moodifier-admin.component';

describe('MoodifierAdminComponent', () => {
  let component: MoodifierAdminComponent;
  let fixture: ComponentFixture<MoodifierAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodifierAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoodifierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
