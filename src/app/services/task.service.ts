import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TASKS } from "../mock-task";
import { Task } from "../task-interface";


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor( private Http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.Http.get<Task[]>(this.apiUrl)
  }
}
