import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousQuestionComponent } from './previous-question.component';

describe('PreviousQuestionComponent', () => {
  let component: PreviousQuestionComponent;
  let fixture: ComponentFixture<PreviousQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
