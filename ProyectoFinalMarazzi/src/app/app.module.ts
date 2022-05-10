import { AyudantesRoutingModule } from './featured/ayudantes/ayudantes-routing.module';
import { ProfesoresRoutingModule } from './featured/profesores/profesores-routing.module';
import { AyudantesModule } from './featured/ayudantes/ayudantes.module';
import { ProfesoresModule } from './featured/profesores/profesores.module';
import { EstudiantesRoutingModule } from './featured/estudiantes/estudiantes-routing.module';
import { CursosModule } from './featured/cursos/cursos.module';

import { PersonsService } from './services/persons.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CourseService } from './services/course.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EstudiantesModule } from './featured/estudiantes/estudiantes.module';
import { InscripcionesModule } from './featured/inscripciones/inscripciones.module';
import { CursosRoutingModule } from './featured/cursos/cursos-routing.module';
import { InscripcionesRoutingModule } from './featured/inscripciones/inscripciones-routing.module';
import { AppCoreRoutingModule } from './core/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from './state/app.state';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    PaginaNoEncontradaComponent

  ],
  imports: [
    BrowserModule,
    AppCoreRoutingModule,
    EstudiantesRoutingModule,
    ProfesoresRoutingModule,
    AyudantesRoutingModule,
    CursosRoutingModule,
    InscripcionesRoutingModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,

    NgxSpinnerModule,

    CoreModule,
    EstudiantesModule,
    ProfesoresModule,
    AyudantesModule,
    CursosModule,
    InscripcionesModule,
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: "NGRX Testing" })
  ],
  providers: [
    CourseService,
    PersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
