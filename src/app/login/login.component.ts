import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

/**
 * This component handles the login form 
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  /**
   * Validates user on submit
   * 
   * @returns true if user enters valid credentials
   */
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.value.username == "grant" && this.loginForm.value.password == "Password1!") {
      this.router.navigate(['/profile']);
      return true;
    }
    return false;
  }

  /**
   * Clears form
   * Current implementation just refreshes the page to clear
   */
  clear() {
    location.reload();
    // this.loginForm.value.username = "";
    // this.loginForm.value.password = "";
  }
}
