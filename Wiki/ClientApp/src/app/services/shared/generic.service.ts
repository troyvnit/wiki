import { Injectable } from '@angular/core';
import { ListRequest, PagedList } from 'src/app/models/shared/generic.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IGenericService<T> {
    list(rq: ListRequest): Observable<PagedList<T>>;
    getById(id: number | string): Observable<T>;
    create(data: T): Observable<T>;
    update(data: T): Observable<T>;
    delete(id: number, rowVersionString: string): Observable<any>;
}

@Injectable()
export abstract class GenericService<T> implements IGenericService<T> {

    abstract apiEndpoint: string;

    constructor(protected httpClient: HttpClient) {
    }

    list(rq: ListRequest = new ListRequest()): Observable<PagedList<T>> {
        const options = {
            params: {
                searchTerm: rq.searchTerm,
                sortData: rq.sortData,
                pageNumber: rq.pageNumber.toString(),
                pageSize: rq.pageSize.toString()
            }
        };

        return this.httpClient.get<PagedList<T>>(this.apiEndpoint, options);
    }

    getById(id: number | string): Observable<T> {
        return this.httpClient.get<T>(`${this.apiEndpoint}/${id}`);
    }

    create(data: T): Observable<T> {
        return this.httpClient.post<T>(this.apiEndpoint, data);
    }

    update(data: T): Observable<T> {
        return this.httpClient.put<T>(this.apiEndpoint, data);
    }

    delete(id: number, rowVersionString: string = null): Observable<any> {
        const options = {
            params: {
                rowVersionString
            }
        };

        return this.httpClient.delete(`${this.apiEndpoint}/${id}`, options);
    }
}
