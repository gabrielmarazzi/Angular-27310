import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContenidoDialogComponent } from '../contenido-dialog/contenido-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogoRef: MatDialog
  ) { }

  ngOnInit(): void {
  }

  abrirDialog() {
    this.dialogoRef.open(ContenidoDialogComponent, {
      data: {
        nombre: 'Gabriel',
        curso: "Angular",
        rol: "Desarrollador"
      }

    })

  }
}
