import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private api:ApiService,private toastr: ToastrService,private router:Router){}
allQuestion:any
  ngOnInit() {
    this.api.getAllQuestion().subscribe({
      next: (res) => {
        if (res) {
          this.allQuestion=res
          console.log("all question",res)
        } else {
          this.toastr.error('No resopnce found');
        }
      },
      error: (err) => {
        this.toastr.error('error');

      }
    });
  }

  // answer(){
  //   this.router.navigate(['giveAnswer',])
  // }
  }



