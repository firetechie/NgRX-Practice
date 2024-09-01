import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateBlogComponent } from './add-update-blog.component';

describe('AddUpdateBlogComponent', () => {
  let component: AddUpdateBlogComponent;
  let fixture: ComponentFixture<AddUpdateBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdateBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUpdateBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
