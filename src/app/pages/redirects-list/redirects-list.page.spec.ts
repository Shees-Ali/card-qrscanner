import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedirectsListPage } from './redirects-list.page';

describe('RedirectsListPage', () => {
  let component: RedirectsListPage;
  let fixture: ComponentFixture<RedirectsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RedirectsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
