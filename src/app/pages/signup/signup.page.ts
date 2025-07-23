import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GlobalServices } from 'src/app/services/global-services/global-services';
import { SupaBaseApiService } from 'src/app/services/supabase/supabase-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  standalone: false
})
export class SignupPage {
  signupForm: FormGroup;
  passwordMismatch = false;
  bDisableButton = false;

  constructor(
    private fb: FormBuilder,
    private api: SupaBaseApiService,
    private globalServices: GlobalServices,
    private router: Router

  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  isTouched(field: string): boolean {
    return this.signupForm.controls[field].touched || this.signupForm.controls[field].dirty;
  }


  async onSubmit() {
    const { password, confirmPassword } = this.signupForm.value;
    this.passwordMismatch = password !== confirmPassword;
    this.bDisableButton = true;

    //If invalid shows all the error
    if (this.signupForm.invalid || this.passwordMismatch) {
      this.bDisableButton = false;

      this.markFormTouched();
      return;
    }

    console.log('Sign up successful:', this.signupForm.value);

    const { data, error } = await this.api.signupWithEmail(this.signupForm.value);

    if (error) {
      await this.globalServices.presentToast(error?.message ?? 'Error on server', "danger", 'alert-circle-outline');
      this.bDisableButton = false;
      return;
    }


    if (data) {
      await this.globalServices.presentToast('Success sign up', "success", 'checkmark-circle-outline');
      this.bDisableButton = false;
      this.router.navigate(['verify-email']);
    }

  }

  private markFormTouched() {
    Object.values(this.signupForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
