import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ytvideo',
  templateUrl: './ytvideo.component.html',
  styleUrls: ['./ytvideo.component.scss']
})
export class YtvideoComponent implements OnInit {

  @Input() public video:string;
  

  constructor() { }

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    // console.log(this.video);
    
  }

}
