import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from "../mock-task";
import { task } from "../task-interface";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor( private Http:HttpClient) { }

  getTasks(): Observable<task[]> {
    return this.Http.get<task[]>(this.apiUrl)
  }
}
