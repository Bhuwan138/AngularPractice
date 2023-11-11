import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {
  public product:any = {
    Name:'Iphone 14',
    Price:89000,
    Image:'assets/Iphone.jpg',
    Description: 'Iphone is the best phone and it is more secure for the user'
  }

  btnText:string = "Show Description";
  toogle:boolean = true;

  ToogleButton(){
    this.toogle = this.toogle == true ? false : true;
    this.btnText = (this.btnText == "Show Description")  ? "Show Preview" : "Show Description";
  }
}
