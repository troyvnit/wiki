import { Component } from '@angular/core';
import { Weather } from '../../models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  public weather: Weather;

  constructor(weatherService: WeatherService) {
    weatherService.getWeather('Ho Chi Minh').subscribe(result => {
      this.weather = result;
    }, error => console.error(error));
  }
}
