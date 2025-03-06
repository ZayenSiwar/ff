
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
export interface Robot {
  id: number;
  name: string;
  status: string;
}
export class AjouterRobotService {
  private apiUrl = 'http://localhost:3000/robots'; 


  private robotsSubject = new BehaviorSubject<Robot[]>([]);
  robots$ = this.robotsSubject.asObservable();


  addRobot(robot: Robot): void {
    const currentRobots = this.robotsSubject.value;
    this.robotsSubject.next([...currentRobots, robot]);
  }
  getRobots(): Observable<Robot[]> {
    return this.robots$;
  }
}
