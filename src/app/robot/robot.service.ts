import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Robot {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  getAllRobots() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8080/api/robots';

  constructor(private http: HttpClient) {}


  addRobot(robot: Robot): Observable<Robot> {
    return this.http.post<Robot>(this.apiUrl, robot);
  }


  
  updateRobot(robot: Robot): Observable<Robot> {
    return this.http.put<Robot>(`${this.apiUrl}/${robot.id}`, robot);
  }


  getRobots(): Observable<Robot[]> {
    return this.http.get<Robot[]>(this.apiUrl);
  }


  deleteRobot(robotId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${robotId}`);
  }

  getRobotById(robotId: number): Observable<Robot> {
    return this.http.get<Robot>(`${this.apiUrl}/${robotId}`);
  }

}
