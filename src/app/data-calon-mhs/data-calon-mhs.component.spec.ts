import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCalonMhsComponent } from './data-calon-mhs.component';

describe('DataCalonMhsComponent', () => {
  let component: DataCalonMhsComponent;
  let fixture: ComponentFixture<DataCalonMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCalonMhsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCalonMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
