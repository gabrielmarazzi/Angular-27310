import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { AssistantsModalComponent } from './assistants-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




describe('AssistantsModalComponent', () => {
  let component: AssistantsModalComponent;
  let fixture: ComponentFixture<AssistantsModalComponent>;
  const dialogMock = {
    close: () => { }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssistantsModalComponent],
      imports: [MaterialModule, HttpClientModule, MatDialogModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantsModalComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });


  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.formularioAyudante.controls['legajo'].setValue('');
    component.formularioAyudante.controls['nombre'].setValue('');
    component.formularioAyudante.controls['apellido'].setValue('');
    component.formularioAyudante.controls['correo'].setValue('');
    component.formularioAyudante.controls['fechaNacimiento'].setValue('');
    expect(component.formularioAyudante.valid).toBeFalsy();

  });

  it('Validación datos Nombre', () => {
    const nombre = component.formularioAyudante.controls['nombre'];
    expect(nombre.valid).toBeFalsy();

    nombre.setValue('Juan');
    expect(nombre.valid).toBeTruthy();
  });

  it('Validación datos Apellido', () => {
    const apellido = component.formularioAyudante.controls['apellido'];
    expect(apellido.valid).toBeFalsy();

    apellido.setValue('Perez');
    expect(apellido.valid).toBeTruthy();
  });

  it('Validación datos Correo', () => {
    const correo = component.formularioAyudante.controls['correo'];
    expect(correo.valid).toBeFalsy();

    correo.setValue('gabriel@marazzi.com');
    expect(correo.valid).toBeTruthy();
  });


  it('form valid', () => {

    const formulario = component.formularioAyudante;
    formulario.controls['legajo'].setValue(1);
    formulario.controls['nombre'].setValue('Juan');
    formulario.controls['apellido'].setValue('Perez');
    formulario.controls['correo'].setValue('gabriel@marazzi.com');
    formulario.controls['fechaNacimiento'].setValue(new Date());
    expect(formulario.valid).toBeTruthy();
  });

  it('Check form submit', () => {
    // const el = fixture.debugElement.nativeElement as HTMLElement;
    // el.getElementsByTagName("button")[1].click();
    // console.log(el.getElementsByTagName("button"));
    // expect(component.formularioAyudante).toHaveBeenCalled();
    const formulario = component.formularioAyudante;
    formulario.controls['legajo'].setValue(1);
    formulario.controls['nombre'].setValue('Juan');
    formulario.controls['apellido'].setValue('Perez');
    formulario.controls['correo'].setValue('gabriel@marazzi.com');
    formulario.controls['fechaNacimiento'].setValue(new Date());
    component.agregarAyudante();
    expect(component.formularioAyudante.valid).toBeTruthy();

  });


});
