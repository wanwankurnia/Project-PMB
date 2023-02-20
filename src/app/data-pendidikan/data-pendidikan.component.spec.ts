import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPendidikanComponent } from './data-pendidikan.component';

describe('DataPendidikanComponent', () => {
  let component: DataPendidikanComponent;
  let fixture: ComponentFixture<DataPendidikanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPendidikanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataPendidikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
