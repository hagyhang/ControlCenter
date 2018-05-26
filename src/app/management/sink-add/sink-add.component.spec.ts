import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinkAddComponent } from './sink-add.component';

describe('SinkAddComponent', () => {
  let component: SinkAddComponent;
  let fixture: ComponentFixture<SinkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
