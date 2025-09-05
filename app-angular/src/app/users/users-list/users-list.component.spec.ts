import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UsersListComponent } from './users-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let originalConsoleError!: any;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = function (message?: any, ...optionalParams: any[]): void {
      const params = optionalParams ? `\nParams: ${optionalParams}` : '';
      fail(`Test contained console error:\n${message}${params}`);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show data from UserService', () => {
    const usersService = TestBed.inject(UserService);
    spyOn(usersService, 'getList$').and.returnValue(of([
      { id: 1, name: 'User 1', email: 'test@test.com' },
      { id: 2, name: 'User 2', email: 'test2@test.com' }
    ]));

    fixture.detectChanges();

    expect(fixture.nativeElement.innerText).toContain('User 1');
    expect(fixture.nativeElement.innerText).toContain('User 2');
  });
});
