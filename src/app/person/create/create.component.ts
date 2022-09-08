import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';












@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  personForm: Person = {
    id: 0,
    class: '',
    picture: null,
    address: '',
    name: '',
    email: '',
    phone: 0,
    password: '',
    sex: '',
  };
  constructor(private peronService: PersonService, private router: Router) {}

  ngOnInit(): void {}
  
  selectImage(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.personForm.picture = e.target.result;
      };
      console.log(this.personForm.picture);
    }
  }
  create() {
    this.peronService.create(this.personForm).subscribe({
      next: (data) => {
        this.router.navigate(['/person/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
