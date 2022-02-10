import { Component, OnInit, Input } from '@angular/core';
import { task } from 'src/app/task-interface';
import { TASKS } from "../../mock-task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: task = TASKS [0];

  constructor() { }

  ngOnInit(): void {
  }

}
