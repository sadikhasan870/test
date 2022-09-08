import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatComponent } from '../creat/creat.component';
import { LoginComponent } from '../login/login.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'person/home', component: HomeComponent },
{path:'person/create',component:CreateComponent},
{path:'person/edit/:id',component:EditComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:CreatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
