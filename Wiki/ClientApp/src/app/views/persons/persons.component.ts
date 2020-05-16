import { Component } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent {
  public persons: Person[];

  constructor(personService: PersonService) {
    personService.getPersons().subscribe(result => {
      this.persons = result;
    }, error => console.error(error));
  }
}
