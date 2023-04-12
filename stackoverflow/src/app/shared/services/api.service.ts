import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = environment.baseURl;
  signup = environment.signU;
  login = environment.userlogin
  addNewQuestion =environment.addNewQuestion;
  allQuestion = environment.Allquestion

  constructor(private http:HttpClient) { }

  userSignup(userData: any) {
    try {
      return this.http.post(this.baseURL + this.signup, userData);
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  userLogin(userData: any) {
    try {
      return this.http.get(this.baseURL + this.login, userData);
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }

  addQuestion(question:any){
    try{
      return this.http.post(this.baseURL+this.addNewQuestion,question);
    }catch(error){
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
  getAllQuestion(){
    try {
      return this.http.get(this.baseURL + this.allQuestion);
    } catch (error) {
      console.error('An error occurred while fetching all products:', error);
      throw error; // re-throw the error to be caught by the calling function
    }
  }
}
