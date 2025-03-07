import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualiserAdminComponent } from './visualiser-admin.component';

describe('VisualiserAdminComponent', () => {
  let component: VisualiserAdminComponent;
  let fixture: ComponentFixture<VisualiserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualiserAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualiserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
