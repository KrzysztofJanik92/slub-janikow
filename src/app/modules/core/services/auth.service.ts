import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {guests} from "../guests/guests.const";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private guests = guests;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(id: number, password: string) {
    const user = this.getUser(id);

    if (user.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.router.navigate(['/home']);
    } else {
      return 'Błędne hasło!'
    }
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  private getUser(userId: number): User {
    return this.guests.find((guest: User) => guest.id === userId);
  }
}
