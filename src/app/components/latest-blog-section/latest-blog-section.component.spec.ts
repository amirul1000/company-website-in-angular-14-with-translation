import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogSectionComponent } from './latest-blog-section.component';

describe('LatestBlogSectionComponent', () => {
  let component: LatestBlogSectionComponent;
  let fixture: ComponentFixture<LatestBlogSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBlogSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
