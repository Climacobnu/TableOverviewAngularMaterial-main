import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TableOverviewExampleService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<any> {
        return this.http.get<any>('/assets/images/teste.json');
    }
}
