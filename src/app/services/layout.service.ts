import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {


  private opened: boolean = true;
  private messageSource = new BehaviorSubject<boolean>(this.opened);
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  
  changeMessage(opened: boolean) {
    this.messageSource.next(opened);
  }

}
