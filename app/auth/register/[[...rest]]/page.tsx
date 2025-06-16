"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { signUp } from "@/modules/auth/server/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  RegisterForm,
  RegisterFormFields,
} from "@/modules/auth/components/RegisterForm";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const handleRegister = async (data: RegisterFormFields) => {
    try {
      setLoadingAuth(true);
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
      setLoadingAuth(false);
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
            <RegisterForm
              onSubmit={handleRegister}
              submitButtonText="Iniciar Sesión"
              loading={loadingAuth}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
