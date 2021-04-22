import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMediaComponent } from './use-media.component';

describe('UseMediaComponent', () => {
  let component: UseMediaComponent;
  let fixture: ComponentFixture<UseMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
