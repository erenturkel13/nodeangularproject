import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecomponentComponent } from './simplecomponent.component';

describe('SimplecomponentComponent', () => {
  let component: SimplecomponentComponent;
  let fixture: ComponentFixture<SimplecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
