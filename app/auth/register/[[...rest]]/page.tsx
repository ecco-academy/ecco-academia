"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { signUp } from "@/modules/auth/server/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  RegisterForm,
  RegisterFormFields,
} from "@/modules/auth/components/RegisterForm";
import Image from "@/components/ui/image";
import Link from "next/link";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingRegister, setLoadingRegister] = useState(false);

  const handleRegister = async (data: RegisterFormFields) => {
    try {
      setLoadingRegister(true);
      const res = await signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            first_name: data.userName,
          },
        },
      });
      if (res.data.user?.action_link) {
        console.log("User action link:", res.data.user.action_link);
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
      setLoadingRegister(false);
    }
  };

  return (
    <Card className="w-fit max-w-[400px]">
      <CardContent>
        <Image
          src="/logo.png"
          alt="Ecco Academia Logo"
          width={32}
          height={32}
          className="mx-auto mb-2"
        />
        <h2 className="text-xl font-bold mb-2 text-center ">Crear cuenta</h2>
        <p className="text-sm text-gray-600 mb-6">
          Bienvenido a Ecco Academia! Una vez creada tu cuenta, podrás acceder a
          todos los cursos y recursos disponibles.
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
          <RegisterForm onSubmit={handleRegister} loading={loadingRegister} />
        </div>
        <span className="text-sm text-gray-500 mt-4 block text-center">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            className="text-black hover:underline font-semibold"
          >
            Iniciar sesión
          </Link>
        </span>
      </CardContent>
    </Card>
  );
}
