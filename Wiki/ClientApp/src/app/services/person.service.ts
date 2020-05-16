import { Person } from '../models/person.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {
    apiEndpoint = `${environment.apiUrl}`;

    constructor(protected httpClient: HttpClient) {
    }

    getPersons(): Observable<Person[]> {
        return this.httpClient.get<Person[]>(`${this.apiEndpoint}/users`);
    }

    getPersonByUsername(username: string): Observable<Person> {
        return this.httpClient.get<Person>(`${this.apiEndpoint}/users/${username}`);
    }
}
