import { Injectable } from '@angular/core';
import { supabase } from './supabase.service'

@Injectable({
    providedIn: 'root',
})

export class SupaBaseApiService {

    constructor() { }

    async getAllUsers() {
        return await supabase.from('users').select('*');
    }

    async signupWithEmail({ name, email, password }: any) {
        return await supabase.auth.signUp({
            email,
            password,
            options: { data: { name } }
        })
    }


    async signupWithPhoneNumber({ phone, password }: any) {
        return await supabase.auth.signUp({
            phone,
            password
        })
    }

    async login({ email, password }: any) {
        return await supabase.auth.signInWithPassword({
            email,
            password
        });

    }

    //   saveRSVP(data: any) {
    //     return this.http.post(`${this.serverUrl}/save`, data);
    //   }
}
