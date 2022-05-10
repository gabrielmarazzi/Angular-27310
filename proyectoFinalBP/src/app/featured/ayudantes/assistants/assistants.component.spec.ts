import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';

import { AssistantsComponent } from './assistants.component';

describe('AssistantsComponent', () => {
  let component: AssistantsComponent;
  let fixture: ComponentFixture<AssistantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssistantsComponent],
      imports: [MaterialModule, HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });


  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('Obtención de ayudantes (hay uno por defecto) desde servicio', () => {
    const fixture = TestBed.createComponent(AssistantsComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.assistants$.subscribe(assistants => {
      expect(assistants.length).toBeGreaterThanOrEqual(1);
    });
    expect(component).toBeTruthy();

  });
});
