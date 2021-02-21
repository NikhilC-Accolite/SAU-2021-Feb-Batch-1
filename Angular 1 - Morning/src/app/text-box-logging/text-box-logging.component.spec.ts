import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxLoggingComponent } from './text-box-logging.component';

describe('TextBoxLoggingComponent', () => {
  let component: TextBoxLoggingComponent;
  let fixture: ComponentFixture<TextBoxLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
