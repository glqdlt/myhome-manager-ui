import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTimeLineComponent } from './test-time-line.component';

describe('TestTimeLineComponent', () => {
  let component: TestTimeLineComponent;
  let fixture: ComponentFixture<TestTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
