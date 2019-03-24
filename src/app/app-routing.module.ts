import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { SprintsComponent } from './sprints/sprints.component';
import { ChatsComponent } from './chats/chats.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from '../app/guard/auth.guard';

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'issues', component: IssuesComponent, canActivate: [AuthGuard]},
  {path:'sprints', component: SprintsComponent, canActivate: [AuthGuard]},
  {path:'messages', component: ChatsComponent, canActivate: [AuthGuard]},
  {path:'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path:'login', component: AuthComponent},
  // otherwise redirect to login
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
