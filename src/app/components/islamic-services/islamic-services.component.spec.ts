import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicServicesComponent } from './islamic-services.component';

describe('IslamicServicesComponent', () => {
  let component: IslamicServicesComponent;
  let fixture: ComponentFixture<IslamicServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslamicServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamicServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
