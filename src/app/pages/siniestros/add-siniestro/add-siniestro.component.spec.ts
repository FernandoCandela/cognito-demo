import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiniestroComponent } from './add-siniestro.component';

describe('AddSiniestroComponent', () => {
  let component: AddSiniestroComponent;
  let fixture: ComponentFixture<AddSiniestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiniestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
