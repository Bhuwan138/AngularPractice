import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixRegisterComponent } from './netflix-register.component';

describe('NetflixRegisterComponent', () => {
  let component: NetflixRegisterComponent;
  let fixture: ComponentFixture<NetflixRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetflixRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetflixRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
