import { Component, OnInit } from '@angular/core';
import { DogsInfoService } from '../../services/dogs-info.service';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-breed-image',
  templateUrl: './breed-image.component.html',
  styleUrls: ['./breed-image.component.css']
})
export class BreedImageComponent implements OnInit {

  breedImages: string[] = [];
  breedName: string;
  faHeart = faHeart;

  constructor(private dogsService: DogsInfoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.breedName = params.get('breedId');
      console.log(this.breedName);
    });

    this.dogsService.getImage(this.breedName).subscribe(response => {
      this.breedImages.push(response.message);
    });
  }

  onClick() {
    this.dogsService.getImage(this.breedName).subscribe(response => {
      console.log("bananas");
      this.breedImages.push(response.message);
    });
  }


}
