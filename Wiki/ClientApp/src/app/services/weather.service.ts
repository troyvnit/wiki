import { Weather } from '../models/weather.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
    apiEndpoint = `${environment.baseUrl}`;

    constructor(protected httpClient: HttpClient) {
    }

    getWeather(query: string): Observable<Weather> {
        return this.httpClient.get<Weather>(`${this.apiEndpoint}/weatherforecast?query=${query}`);
    }
}
