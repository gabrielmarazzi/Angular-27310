import { selectAssistants } from './../../../state/selectors/assistant.selector';

import { AssistantsModalComponent } from './../assistants-modal/assistants-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Assistants } from 'src/app/classes/assistants';
import { PersonsService } from 'src/app/services/persons.service';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';
import { NotificationService } from 'src/app/services/notification.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { LoadAssistants, LoadAssistantsSuccess } from 'src/app/state/actions/assistant.action';
import { Persons } from 'src/app/classes/persons';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {


  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  assistants: any[] = []
  assistants$!: Observable<any>
  assistantsSuscripcion!: any;
  ABMAssistants: boolean = false;
  columnas: string[] = ['legajo', 'nombre', 'edad', 'fechaNacimiento', 'habilitado', 'correo', 'opciones']

  dataSource = new MatTableDataSource();

  constructor(
    public dialogoRef: MatDialog,
    private PersonsService: PersonsService,
    private notificationService: NotificationService,
    private store: Store<AppState>
  ) { }


  ngOnInit(): void {

    // this.assistants$ = this.PersonsService.obtenerDatosAyudantesObservable();
    // this.assistantsSuscripcion = this.assistants$
    //   .subscribe((datos) => {
    //     this.assistants = datos;
    //     this.dataSource.data = this.assistants;
    //     // console.log(this.assistant);
    //   });
    this.cargarAssistants();
    if (SharedFunctions.getRole() <= 2) {
      this.ABMAssistants = true;
    }
  }

  cargarAssistants() {
    this.store.dispatch(LoadAssistants());
    this.assistantsSuscripcion = this.PersonsService.obtenerDatosAyudantesObservable();
    this.assistantsSuscripcion.subscribe((datos: any) => {

      this.store.dispatch(LoadAssistantsSuccess({ assistants: datos }));
    });
    this.assistants$ = this.store.select(selectAssistants);
  }

  ngOnDestroy(): void {
    // this.assistantsSuscripcion.unsubscribe();
  }

  addAssistant() {
    const dialogRef = this.dialogoRef.open(AssistantsModalComponent, {
      data: {
        estudiante: null,
        opcion: 'agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {

      let newAssistant = result.data[1];
      newAssistant.id = this.assistants.length + 1;
      this.assistants.push(newAssistant);
      this.table.renderRows();
      let random = Math.floor(Math.random() * 8) + 1;
      //edicion en si
      let fechaNacimiento = new Date(newAssistant.person.birthDay);
      let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
      let data = {
        id: "",
        legajo: newAssistant.legajo,
        name: newAssistant.person.name,
        lastName: newAssistant.person.lastName,
        password: "password",
        email: newAssistant.person.email,
        birthDay: nuevaFecha,
        role: 3,
        image: "./assets/img/avatars/" + random + ".jpg",
        active: true,
        idP: newAssistant.id,
      }

      this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
        .then((datos: any) => {
          //this.assistants$ = this.PersonsService.obtenerDatosAyudantesObservable();
          this.cargarAssistants();
          this.notificationService.openSnackBar("Ayudante creado!", "Cerrar");
        })



    })
  }

  viewAssistant(assistant: Assistants) {
    const dialogRef = this.dialogoRef.open(AssistantsModalComponent, {
      data: {
        ayudante: assistant,
        opcion: 'ver'
      }
    });
  }

  editAssistant(assistant: Assistants) {
    const person = new Persons(assistant.person.id, assistant.person.name, assistant.person.lastName, assistant.person.email, assistant.person.password, assistant.person.birthDay, assistant.person.role, assistant.person.image, assistant.person.active);
    const assistantClone = new Assistants(assistant.id, assistant.legajo, person, assistant.courses);
    const dialogRef = this.dialogoRef.open(AssistantsModalComponent, {
      data: {
        ayudante: assistantClone,
        opcion: 'editar'
      }
    });
    // console.log(assistant);
    dialogRef.afterClosed().subscribe(result => {

      let oldAssistant = result.data[0];
      let newAssistant = result.data[1];
      let index = this.assistants.indexOf(oldAssistant);
      this.assistants[index] = newAssistant;
      this.table.renderRows();
      let random = Math.floor(Math.random() * 8) + 1;
      //edicion en si
      let fechaNacimiento = new Date(newAssistant.person.birthDay);
      let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;

      let data = {
        id: newAssistant.person.id,
        legajo: newAssistant.legajo,
        name: newAssistant.person.name,
        lastName: newAssistant.person.lastName,
        password: "password",
        email: newAssistant.person.email,
        birthDay: nuevaFecha,
        role: 3,
        image: "./assets/img/avatars/" + random + ".jpg",
        active: true,
        idP: newAssistant.id,
      }

      this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
        .then((datos) => {
          //this.assistants$ = this.PersonsService.obtenerDatosAyudantesObservable();
          this.cargarAssistants();
          this.notificationService.openSnackBar("Ayudante actualizado!", "Cerrar");
        })



    })
  }


  enableDeleteAssistant(assistant: Assistants, enable: boolean) {
    let random = Math.floor(Math.random() * 8) + 1;
    let fechaNacimiento = new Date(assistant.person.birthDay);
    let nuevaFecha = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
    let data = {
      id: assistant.person.id,
      legajo: assistant.legajo,
      name: assistant.person.name,
      lastName: assistant.person.lastName,
      password: "password",
      email: assistant.person.email,
      birthDay: nuevaFecha,
      role: 3,
      image: "./assets/img/avatars/" + random + ".jpg",
      active: enable,
      idP: assistant.id
    }
    this.PersonsService.crearActualizarPersonaObservable(data).toPromise()
      .then((datos) => {

        //this.assistants$ = this.PersonsService.obtenerDatosAyudantesObservable();
        this.cargarAssistants();
        this.notificationService.openSnackBar("Ayudante actualizado!", "Cerrar");
      })

    // this.assistantsSuscripcion = this.assistants$
    //   .subscribe((datos) => {
    //     this.assistants = datos;
    //     this.dataSource.data = this.assistants;

    //   });

    // this.notificationService.openSnackBar("Ayudante actualizado!", "Cerrar");

  }

}
