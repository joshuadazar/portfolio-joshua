import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationScrollComponent } from './animation-scroll.component';

describe('AnimationScrollComponent', () => {
  let component: AnimationScrollComponent;
  let fixture: ComponentFixture<AnimationScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
