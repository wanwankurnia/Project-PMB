import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPesertaComponent } from './profil-peserta.component';

describe('ProfilPesertaComponent', () => {
  let component: ProfilPesertaComponent;
  let fixture: ComponentFixture<ProfilPesertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPesertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
