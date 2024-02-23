import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCubeLoaderComponent } from './ngx-cube-loader.component';

describe('NgxCubeLoaderComponent', () => {
  let component: NgxCubeLoaderComponent;
  let fixture: ComponentFixture<NgxCubeLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCubeLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCubeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
