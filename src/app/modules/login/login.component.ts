import {Component, OnInit} from '@angular/core';
import {User} from "../core/models/user.model";
import {guests} from "../core/guests/guests.const";
import {AuthService} from "../core/services/auth.service";
import {LoginLabelEnum} from "../core/models/login-label.enum";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'valueChanged',
      [
        transition('void => *', []),   // when the item is created
        transition('* => void', []),   // when the item is removed
        transition('* => *', [         // when the item is changed
          animate(600, keyframes([  // animate for 1200 ms
            style({opacity: 0, offset: 0.0}),
            style({opacity: 1, offset: 1.0}),
          ])),
        ]),
      ]),
  ]
})
export class LoginComponent implements OnInit {
  fg: FormGroup;
  guests: User[] = guests;
  currentGuest: User;
  label: LoginLabelEnum = LoginLabelEnum.CHOOSE_USER;
  filteredOptions: Observable<User[]>;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.filteredOptions = this.getFormControl('name').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  selectUser(user) {
    this.currentGuest = user?.option?.value;
    this.label = LoginLabelEnum.ENTER_PASSWORD;
  }

  login() {
    this.authService.login(this.currentGuest?.id, this.getFormControl('password'));
  }

  getFormControl(name: string): AbstractControl {
    return this.fg.get(name);
  }

  displayProperty(value: User): string {
    if (value) {
      return `${value.name} ${value.surname}`
    }
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase().trim();
    const results = [];

    this.guests.forEach((guest: User) => {
      if ((`${guest.name} ${guest.surname}`).toLowerCase().indexOf(filterValue) > -1) {
        results.push(guest);
      }
    });

    return results;
  }

}
