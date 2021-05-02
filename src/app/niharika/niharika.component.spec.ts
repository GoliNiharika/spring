import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NiharikaComponent } from './niharika.component';

describe('NiharikaComponent', () => {
  let component: NiharikaComponent;
  let fixture: ComponentFixture<NiharikaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NiharikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiharikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
