import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiniestroComponent } from './edit-siniestro.component';

describe('EditSiniestroComponent', () => {
  let component: EditSiniestroComponent;
  let fixture: ComponentFixture<EditSiniestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSiniestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
