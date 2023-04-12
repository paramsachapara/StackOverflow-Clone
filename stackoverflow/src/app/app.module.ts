import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './shared/components/home/home.component';
import { GiveAnswerComponent } from './shared/components/give-answer/give-answer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GiveAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({
      timeOut: 800,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
