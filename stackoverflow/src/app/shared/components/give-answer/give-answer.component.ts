import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-give-answer',
  templateUrl: './give-answer.component.html',
  styleUrls: ['./give-answer.component.css']
})
export class GiveAnswerComponent {
  constructor(private api:ApiService,private toastr: ToastrService, private route:ActivatedRoute ){}
  id:any
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id=params['id']
      
    })

  }
    answerForm = new FormGroup({
      ANswer: new FormControl(null, [
        Validators.required,
      ])
    });


    data:any
  add(){
    this.data=this.answerForm.getRawValue();


    this.data['username']=localStorage.getItem('username');
    let tagString =this.data.tags;
    let tagsArray = tagString.split(',');
    this.data['tags']=tagsArray;
    this.data['answer']="no ans yet"
    this.api.addQuestion(this.data).subscribe({
      next: (res: any) => {
        if (res){
          console.log("add question responce",res);
          this.toastr.success("question asked successfully")
          this.answerForm.reset()
        }
        else{
          this.toastr.error("error in getting responce")
        }


      },
      error: (err) => {
        this.toastr.error('error');

      }
    })
  }
}
