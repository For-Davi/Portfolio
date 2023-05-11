import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlueWhiteComponent } from './user-blue-white.component';

describe('UserBlueWhiteComponent', () => {
  let component: UserBlueWhiteComponent;
  let fixture: ComponentFixture<UserBlueWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBlueWhiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBlueWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
