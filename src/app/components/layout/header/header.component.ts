import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {LayoutService} from '../layout.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faSearch = faSearch;
  faHeart = faHeart;

  opened:boolean;

  constructor(private data: LayoutService) {
    this.data.currentMessage.subscribe(opened => this.opened = opened);
   }

  ngOnInit(): void {
  }


  onClick() {
    if (this.opened)
      this.opened = false;
    else
      this.opened = true;

    this.data.changeMessage(this.opened);
  }

}
