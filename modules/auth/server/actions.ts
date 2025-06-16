'use server'


import { createClient } from '@/lib/utils/supabase/server'
import {  SignInWithPasswordCredentials, SignUpWithPasswordCredentials } from '@supabase/supabase-js'
import { AuthResponseDto, LoginResponseDto } from '../types/Auth'



export async function login(data: SignInWithPasswordCredentials): Promise<LoginResponseDto> {
  const supabase = await createClient()
  return await supabase.auth.signInWithPassword(data)
}

export async function signUp(data: SignUpWithPasswordCredentials): Promise<AuthResponseDto> {
  const supabase = await createClient()
  return await supabase.auth.signUp(data)
}