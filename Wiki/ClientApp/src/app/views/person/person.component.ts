import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  public person: Person;

  constructor(personService: PersonService, protected route: ActivatedRoute) {
    const username = this.route.snapshot.paramMap.get('username');
    personService.getPersonByUsername(username).subscribe(result => {
      this.person = result;
    }, error => console.error(error));
  }
}


