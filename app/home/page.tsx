import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export default function Page() {
  return (
    <div className="p-20">
      <h1 className="text-5xl mb-5">Hello Next.js!</h1>
      <Button className="mb-8">Comprar</Button>
      <section>
        <Card>
          <CardHeader title="Título de la tarjeta" className="text-center">
            <h2 className="text-sm text-gray-500">Subtítulo de la tarjeta</h2>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl">Hola mundo</h2>
            <p className="text-sm text-gray-500">
              Esto es un ejemplo de una tarjeta. Puedes usarla para mostrar
              contenido.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
