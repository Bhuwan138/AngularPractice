import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa-rover-image',
  templateUrl: './nasa-rover-image.component.html',
  styleUrls: ['./nasa-rover-image.component.css']
})
export class NasaRoverImageComponent {
  showFormat:string = "Show in Grid"
  marsObject:any;
  async GetMarsObject(){
    let res = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY");
    let data = await res.json();
    this.marsObject = data.photos;
  }

  ToogleShowFormat(){
    this.showFormat = (this.showFormat == "Show in Table")? "Show in Grid": "Show in Table";
  }
}
