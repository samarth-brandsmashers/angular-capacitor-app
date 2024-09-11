import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollListenerComponent } from './scroll-listener.component';

describe('ScrollListenerComponent', () => {
  let component: ScrollListenerComponent;
  let fixture: ComponentFixture<ScrollListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollListenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
