import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  username = ""
  password = ""

  onSubmit() {
    if (this.username == "grant" && this.password == "Password1!") {
      return true;
    }
    return false;
  }
}
