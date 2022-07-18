import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuDashboardComponent } from './nav-menu-dashboard.component';

describe('NavMenuDashboardComponent', () => {
  let component: NavMenuDashboardComponent;
  let fixture: ComponentFixture<NavMenuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
