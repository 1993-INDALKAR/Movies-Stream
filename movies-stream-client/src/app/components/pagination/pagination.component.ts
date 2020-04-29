import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() public pages:Number;
  // @Output() public childEvent = new EventEmitter();
  @Output() someEvent = new EventEmitter<Number>();

  page: Number;

  constructor() { }

  ngOnInit(): void {

    this.page = 1;
    console.log("Total Pages : "+this.pages);

  }




  public onPageChange(pageNum: Number): void {
    console.log(this.page);
    // this.childEvent.emit(this.page);
    this.someEvent.next(this.page);
  }

}
