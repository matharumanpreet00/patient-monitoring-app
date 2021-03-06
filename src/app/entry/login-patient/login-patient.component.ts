import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@app/services/user-service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidator } from "@angular/forms";

@Component({
  selector: "login-patient",
  templateUrl: "./login-patient.component.html",
  styleUrls: ["./login-patient.component.scss"]
})
export class LoginPatientComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private router: Router,
    private _userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  error: String;
  public onSubmit() {
    // if (!this.loginFormGroup.valid) return;

    const user = this.loginFormGroup.value;

    this._userService.login(user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/patient"]);
      },
      error => {
        this.error = error;
      }
    );
  }
}
