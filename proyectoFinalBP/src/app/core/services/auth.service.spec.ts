
import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService]

        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Login', () => {
        it('should NOT return OK', () => {
            service.login("test", "test").subscribe((data) => {
                expect(data.res == "Error").toBeFalsy();
            })
            expect(service).toBeTruthy();
        });
        it('should return OK', () => {
            service.login("gabriel@marazzi.com", "password").subscribe((data) => {
                expect(data.res == "Ok").toBeTruthy();
            })
            expect(service).toBeTruthy();
        });
    })

});
