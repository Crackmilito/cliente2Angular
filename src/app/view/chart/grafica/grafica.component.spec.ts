import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaComponent } from "./GraficaComponent";

describe('GraficaComponent', () => {
  let component: GraficaComponent;
  let fixture: ComponentFixture<GraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
