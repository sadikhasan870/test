import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../person/person';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) {
    this.user ={} as Person;
   }
   signupForm:any;
  user:Person={
    id: 0,
    address: '',
    picture:null,
    class:'',
    name: '',
    email: '',
    phone: 0,
    password: '',
    sex:'',
  }
  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      name:[''],
      class:[''],
      picture:[null],
      email:[''],
      mobile:[''],
      password: ['']
    })
  }
 
  // signupForm = new FormGroup({
  //   name: new FormControl(this.user.name, [
  //   ]),
  //   password: new FormControl(this.user.password, []),
  //   email: new FormControl(this.user.email, [])
  // })

  signUp(){
    this._http.post<any>('http://localhost:3000/signup',this.signupForm.value).subscribe(res=>{
      console.log(res)
      alert('Signup Successfully');
      this.signupForm.reset();
      this._router.navigate(['/login']);
    }), (err: any)=>{
      console.log(err);
      alert('Signup Error');
    }
  }


}
