import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsHabilidadesComponent } from './sections-habilidades.component';

describe('SectionsHailidadesComponent', () => {
  let component: SectionsHabilidadesComponent;
  let fixture: ComponentFixture<SectionsHabilidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionsHabilidadesComponent]
    });
    fixture = TestBed.createComponent(SectionsHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
