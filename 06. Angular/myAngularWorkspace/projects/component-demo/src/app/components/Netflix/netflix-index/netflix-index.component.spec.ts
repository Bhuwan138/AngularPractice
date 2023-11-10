import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixIndexComponent } from './netflix-index.component';

describe('NetflixIndexComponent', () => {
  let component: NetflixIndexComponent;
  let fixture: ComponentFixture<NetflixIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
