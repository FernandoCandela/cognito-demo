import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSiniestroComponent } from './list-siniestro.component';

describe('ListSiniestroComponent', () => {
  let component: ListSiniestroComponent;
  let fixture: ComponentFixture<ListSiniestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSiniestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
