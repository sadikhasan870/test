import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './person/person.module';
import { LoginComponent } from './login/login.component';
import { CreatComponent } from './creat/creat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatComponent,
    SearchFilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule
    

   
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
