import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class PontService {
    name : string = '';
    private subject = new Subject<any>();

    constructor() {}

    getName() : string {
        return this.name;
    }

    setName(name : string) {
        this.name = name;
        this.subject.next(name);
    }

    getObservable() : Observable<any> {
        return this.subject.asObservable();
    }
}