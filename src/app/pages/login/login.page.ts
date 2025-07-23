import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalServices } from 'src/app/services/global-services/global-services';
import { SupaBaseApiService } from 'src/app/services/supabase/supabase-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: SupaBaseApiService,
    private globalServices: GlobalServices
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // Handle login logic here (e.g. call API)
      console.log('Logging in with', email, password);
      const { data, error } = await this.api.login({ email, password });

      if (error) {
        let color = error?.code == 'invalid_credentials' ? 'danger' : 'warning';

        await this.globalServices.presentToast(error?.message ?? 'Error on server', color, 'alert-circle-outline');
      }



    }
  }
}
