import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  opened: boolean;

  constructor(private data: LayoutService) {
    this.data.currentMessage.subscribe(opened => this.opened = opened);
  }

  ngOnInit(): void {
  }



}
