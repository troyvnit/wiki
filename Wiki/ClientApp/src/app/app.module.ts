import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './views/shared/nav-menu/nav-menu.component';
import { NavWelcomeComponent } from './views/shared/nav-welcom/nav-welcome.component';
import { HomeComponent } from './views/home/home.component';
import { PersonsComponent } from './views/persons/persons.component';
import { PersonComponent } from './views/person/person.component';
import { PersonService } from './services/person.service';
import { WeatherComponent } from './views/weather/weather.component';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavWelcomeComponent,
    HomeComponent,
    PersonsComponent,
    PersonComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'persons', component: PersonsComponent },
      { path: 'person/:username', component: PersonComponent },
      { path: 'weather', component: WeatherComponent },
    ])
  ],
  providers: [PersonService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
