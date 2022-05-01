import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PersonsService } from './persons.service';

describe('PersonService', () => {
    let service: PersonsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(PersonsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Personas', () => {
        it('Should return a single person', () => {
            expect(service.obtenerDatosPersonasObservableId(5, 4)).toBeTruthy();
        });

        it('should update a person', () => {
            expect(service.crearActualizarPersonaObservable({})).toBeTruthy();
        });
    });

});
