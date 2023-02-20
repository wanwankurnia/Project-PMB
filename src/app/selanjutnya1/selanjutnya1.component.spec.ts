import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selanjutnya1Component } from './selanjutnya1.component';

describe('Selanjutnya1Component', () => {
  let component: Selanjutnya1Component;
  let fixture: ComponentFixture<Selanjutnya1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Selanjutnya1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selanjutnya1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
