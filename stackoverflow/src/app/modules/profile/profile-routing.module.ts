import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { PreviousQuestionComponent } from './previous-question/previous-question.component';


const routes: Routes = [
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"profile/askQuestion",
    component:AskQuestionComponent
  },
  {
    path:"profile/previousQuestion",
    component:PreviousQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
