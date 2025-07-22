"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { login } from "@/modules/auth/server/actions";
import {
  LoginForm,
  LoginFormFields,
} from "@/modules/auth/components/login-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "@/components/ui/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const handleLogin = async (data: LoginFormFields) => {
    try {
      setLoadingLogin(true);
      const res = await login({
        email: data.email,
        password: data.password,
      });
      if (res.data.user) {
        router.push(redirectTo || "/home");
      }
      if (res.error) {
        setErrorMessage(res.error.message);
        return;
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(
        "Por favor verifique su conexión a internet y si persiste el error contacte con soporte"
      );
    } finally {
      setLoadingLogin(false);
    }
  };

  return (
    <Card className="w-full max-w-[400px] ">
      <CardContent>
        <Image
          src="/logo.png"
          alt="Ecco Academia Logo"
          width={32}
          height={32}
          className="mx-auto mb-2"
        />
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-dark">
          Iniciar Sesión
        </h2>
        <p className="text-sm text-gray-600 mb-7">
          Bienvenido a Ecco Academia. Introduce tus credenciales para comenzar.
        </p>

        <div>
          {errorMessage && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error al iniciar sesión</AlertTitle>
              <AlertDescription>
                {errorMessage || "Por favor, verifica tus credenciales."}
              </AlertDescription>
            </Alert>
          )}
          <LoginForm
            onSubmit={handleLogin}
            submitButtonText="Iniciar Sesión"
            loading={loadingLogin}
          />
        </div>
        <span className="text-sm text-gray-500 mt-4 block text-center">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/auth/register"
            className="text-black hover:underline font-semibold"
          >
            Crear cuenta
          </Link>
        </span>
      </CardContent>
    </Card>
  );
}
