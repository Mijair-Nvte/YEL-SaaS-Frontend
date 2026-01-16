// src/app/(protected)/dashboard/page.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizonal, Plus, Users, ListChecks } from "lucide-react";

export default function DashboardPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col px-4 lg:px-6">
      {/* Main content */}
      <div className="flex-1 space-y-8 pb-32">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            👋 Bienvenido
          </h1>
          <p className="text-muted-foreground">
            ¿Qué te gustaría hacer hoy?
          </p>
        </div>

        <Separator />

        {/* Quick actions */}
        <div className="grid gap-4 md:grid-cols-3">
          <ActionCard
            title="Crear lead"
            description="Registra un nuevo contacto"
            icon={<Plus className="h-5 w-5" />}
            action="Nuevo lead"
          />
          <ActionCard
            title="Ver leads"
            description="Gestiona tus contactos"
            icon={<Users className="h-5 w-5" />}
            action="Abrir leads"
          />
          <ActionCard
            title="Tareas"
            description="Revisa pendientes"
            icon={<ListChecks className="h-5 w-5" />}
            action="Ver tareas"
          />
        </div>

        {/* Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Actividad reciente</CardTitle>
            <CardDescription>
              Últimos movimientos en el sistema
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div>• Lead “Juan Pérez” creado</div>
            <div>• Tarea asignada a María</div>
            <div>• Lead actualizado desde GoHighLevel</div>
          </CardContent>
        </Card>
      </div>

      {/* Chat-style input */}
      <div className="left-0 right-0 z-40 border-t bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 lg:px-6">
          <div className="flex items-end gap-2">
            <Textarea
              placeholder="Escribe una instrucción… (ej: Crear lead Juan Pérez)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={1}
              className="min-h-[44px] resize-none"
            />

            <Button
              size="icon"
              disabled={!message.trim()}
              className="h-[44px] w-[44px]"
            >
              <SendHorizonal className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-2 text-center text-xs text-muted-foreground">
            Puedes escribir comandos o preguntas
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function ActionCard({
  title,
  description,
  icon,
  action,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
}) {
  return (
    <Card className="transition hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
          {icon}
        </div>
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <Button variant="secondary" className="w-full">
          {action}
        </Button>
      </CardContent>
    </Card>
  );
}
