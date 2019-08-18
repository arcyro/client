import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRepoListComponent } from './test-repo-list.component';

describe('TestRepoListComponent', () => {
  let component: TestRepoListComponent;
  let fixture: ComponentFixture<TestRepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRepoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
