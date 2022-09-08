import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';



declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allperson: Person[] = [];
  term = '';
  searchTerm='';
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private personService: PersonService, private router:Router, private http :HttpClient) {}

  ngOnInit(): void {
    
      this.http.get<Person[]>('http://localhost:3000/person').subscribe((data:Person[]) => {
        this.allperson = data;
      });
    // this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    )
  }

  get() {
    this.personService.get().subscribe((data:Person[]) => {
      this.allperson = data;
    });
  }
  openDeleteModel(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.personService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allperson = this.allperson.filter((_) => _.id != this.idTodelete);
        this.deleteModal.hide();
      },
    });
  }
  logOut(){
    alert('Log Out Successful');
    this.router.navigate(['/login']);
  }
}
