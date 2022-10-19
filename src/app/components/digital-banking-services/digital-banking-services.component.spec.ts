import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBankingServicesComponent } from './digital-banking-services.component';

describe('DigitalBankingServicesComponent', () => {
  let component: DigitalBankingServicesComponent;
  let fixture: ComponentFixture<DigitalBankingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalBankingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBankingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
