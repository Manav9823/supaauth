import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupaService {

  private supabase_client: SupabaseClient

  constructor() {
    this.supabase_client = createClient(environment.supabase.url, environment.supabase.key)
   }

   //Register
   signUp(email:string, password:string){
    return this.supabase_client.auth.signUp({email, password})
   }

   //Login
   signIn(email:string, password:string){
    return this.supabase_client.auth.signInWithPassword({email, password})
   } 

   async signWithGoogle(){
    const { data, error } = await this.supabase_client.auth.signInWithOAuth({
      provider: 'google'
    })
    console.log(data)
    if (error) {
      console.error('Error signing in with Google:', error.message);
    } else {
      console.log('Signed in as:');
    }
   }

   async signWithGithub(){
    const { data, error } = await this.supabase_client.auth.signInWithOAuth({
      provider: 'github'
    })
    console.log(data)
    if (error) {
      console.error('Error signing in with Google:', error.message);
    } else {
      console.log('Signed in as:');
    }
   }
}
