import { Component, OnInit } from '@angular/core';
import { SupaBaseApiService } from 'src/app/services/supabase/supabase-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  constructor(
    private supabaseAPI: SupaBaseApiService
  ) { }

  async ngOnInit() {
    const { data, error } = await this.supabaseAPI.getAllUsers();
    console.log(data, error);
  }

  register() {
    // this.api.sendData({ name: 'ionic', message: 'Hello from Capacitor' });
  }

}
