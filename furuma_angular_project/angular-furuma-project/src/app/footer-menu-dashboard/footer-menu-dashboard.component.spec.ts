import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMenuDashboardComponent } from './footer-menu-dashboard.component';

describe('FooterMenuDashboardComponent', () => {
  let component: FooterMenuDashboardComponent;
  let fixture: ComponentFixture<FooterMenuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMenuDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMenuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
