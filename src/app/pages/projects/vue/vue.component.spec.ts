import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueComponent } from './vue.component';

describe('VueComponent', () => {
  let component: VueComponent;
  let fixture: ComponentFixture<VueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
