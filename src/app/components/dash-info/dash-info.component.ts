import { Component, OnInit } from '@angular/core';
import {DogsInfoService } from '../../services/dogs-info.service';


@Component({
  selector: 'app-dash-info',
  templateUrl: './dash-info.component.html',
  styleUrls: ['./dash-info.component.css']
})
export class DashInfoComponent implements OnInit {

  breedslist = [];

  constructor(private dogsService:DogsInfoService) { }

  ngOnInit(): void {
    this.dogsService.getAllDogs().subscribe( response => {
      if(response.status = "sucess"){
        let breeds = response.message;
        this.breedslist = Object.keys(breeds).map((key) => [String(key), breeds[key]]);
      }
  });
  }

}
