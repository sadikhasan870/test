import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  personFrom: Person = {
    id: 0,
    address: '',
    name: '',
    picture: null,
    class: '',
    email: '',
    phone: 0,
    password: '',
    sex:'',
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      
    });
  }
  getById(id: number) {
    this.personService.getById(id).subscribe((data) => {
      this.personFrom = data;
    });
  }
  update() {
    
    this.personService.update(this.personFrom).subscribe({
      next: (data) => {
        this.router.navigate(['/person/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ////image
  selectFiles?: FileList;
  previews: string[] = [];
  
  selectImage(event: any) {
      if(event.target.files){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload =(e:any)=>{
          this.personFrom.picture = e.target.result;
          
        }
      }
  }
}
