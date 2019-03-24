import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Issue} from '../models/issue'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IssuetrackerService {

  constructor(private http: HttpClient, private _auth: AuthService) { }


  listProject() {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this._auth.getUserToken })
      };
    return this.http.get(environment.API_URL + '/project/', headers)
  }

  listEmployee() {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this._auth.getUserToken })
      };
    return this.http.get(environment.API_URL + '/employee/', headers)
  }

  listIssues() {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this._auth.getUserToken })
      };
    return this.http.get(environment.API_URL + '/issue/', headers)
  }

  getOneIssue(id:number) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this._auth.getUserToken })
      };
    return this.http.get(environment.API_URL + '/issue/'+id+'/', headers)
  }

  createIssue(issue:Issue) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this._auth.getUserToken })
    };
    const data = {
      name : issue['name'],
      start_date: issue['start_date'],
      due_date: issue['due_date'],
      status: issue['status'],
      project_id: issue['project']['id'],
      priority: issue['priority'],
      employee_id: issue['employee']['id']
    };
    return this.http.post<any>(environment.API_URL + '/issue/', data, headers)
  }

  changeIssueStage(id:string, stage:string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this._auth.getUserToken })
    };
    const data = {
      new_stage : stage
    };
    return this.http.put<any>(environment.API_URL + '/issue/'+id+'/', data, headers)
  }
}
