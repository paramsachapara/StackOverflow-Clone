import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { GiveAnswerComponent } from './shared/components/give-answer/give-answer.component';

const routes: Routes = [
 {
  path:"",
  component:HomeComponent
 },
 {
  path:"home",
  component:HomeComponent
 },
 {
  path:"giveAnswer/:id",
  component:GiveAnswerComponent
 }
 ,

  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then(
        (m) => m.UserModule
      )

  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      )

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
