import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtvideoComponent } from './ytvideo.component';

describe('YtvideoComponent', () => {
  let component: YtvideoComponent;
  let fixture: ComponentFixture<YtvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
