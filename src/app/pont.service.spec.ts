import { TestBed } from '@angular/core/testing';
import { PontService } from './pont.service';

describe('PontService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service : PontService = TestBed.get(PontService);
        expect(service).toBeTruthy();
    });
});