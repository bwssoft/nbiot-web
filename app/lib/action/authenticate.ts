"use server"

import { signIn } from "@/auth"
import { AuthError } from "next-auth"

export async function userAuthenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const { name, password } = Object.fromEntries(formData.entries())
    await signIn("credentials", {
      name,
      password,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Usuario ou Senha Invalidos!';
        default:
          return 'Ocorreu um erro! Consulte o Administador';
      }
    }
    throw error;
  }
}