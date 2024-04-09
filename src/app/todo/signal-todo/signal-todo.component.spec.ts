import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalTodoComponent } from './signal-todo.component';

describe('SignalTodoComponent', () => {
  let component: SignalTodoComponent;
  let fixture: ComponentFixture<SignalTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
