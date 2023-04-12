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
  allQuestion:any
  selectedQuestionObject:any
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id=params['id']
      console.log(this.id);

    })

    // this.getAllQuestion()
    this.api.getAllQuestion().subscribe({
      next: (res:any) => {
          this.allQuestion=res
          console.log("all questionhhjj",this.allQuestion)
        }
      ,
      error: (err) => {
        this.toastr.error('error');

      }
    });
    console.warn("fghjk",this.allQuestion);

    this.selectedQuestionObject=this.findQuestionFromId(this.id,this.allQuestion)
    console.log("object",this.selectedQuestionObject);



  }
    addAnswerFrom = new FormGroup({
         title: new FormControl(null, [
           Validators.required,
         ])
       })


  getAllQuestion(){

  }// gellAllQuestion ends here

  findQuestionFromId(id:any,array:any){
    return  array.find((obj: { id: any; }) => obj.id === id);
  }
    answerForm = new FormGroup({
      ANswer: new FormControl(null, [
        Validators.required,
      ])
    });


    data:any
    addAns(answer:any){
    this.selectedQuestionObject['answer']=answer

    this.api.addAnswer(this.selectedQuestionObject,this.id).subscribe({
      next: (res: any) => {
        if (res){
          this.toastr.success("answer updated")
          console.log("updated body",this.selectedQuestionObject);

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
