import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSiniestroComponent } from './view-siniestro.component';

describe('ViewSiniestroComponent', () => {
  let component: ViewSiniestroComponent;
  let fixture: ComponentFixture<ViewSiniestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSiniestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
