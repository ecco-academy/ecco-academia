"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { login } from "@/modules/auth/server/actions";
import {
  LoginForm,
  LoginFormFields,
} from "@/modules/auth/components/LoginForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = async (data: LoginFormFields) => {
    try {
      setLoadingLogin(true);
      const res = await login({
        email: data.email,
        password: data.password,
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
      setLoadingLogin(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-fit">
        <CardContent>
          <div className="min-w-[400px]">
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
        </CardContent>
      </Card>
    </div>
  );
}
