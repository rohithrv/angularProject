import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private title : any;
  private currentImage : any;

  constructor(){
    this.title = 'goFind';
    this.currentImage = "testImage2.jpg";
  }
  
  
  catalog = ["testImage2.jpg","jeanjacket.jpeg","dressshirt.jpeg","gucci.jpg","shoes.jpg"];
  
  public changeCurrentImage(clickedImage){

    this.currentImage = clickedImage;
  }
}
