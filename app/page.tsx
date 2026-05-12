// app/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Briefcase,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* HERO */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-1 text-sm text-slate-300">
              Plataforma inteligente de currículos
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Crie currículos profissionais e consiga mais entrevistas
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Monte currículos modernos, organizados e otimizados para vagas de
              emprego em poucos minutos.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="rounded-2xl px-8 py-6 text-lg">
                Criar Currículo
              </Button>

              <Button
                variant="outline"
                className="rounded-2xl border-slate-600 bg-transparent px-8 py-6 text-lg text-white hover:bg-slate-800"
              >
                Ver Modelos
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                Fácil de usar
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                Modelos modernos
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                Exportação em PDF
              </div>
            </div>
          </div>

          {/* CARD HERO */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md rounded-3xl border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-500/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/20 p-3">
                    <FileText className="text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Currículo Inteligente
                    </h3>
                    <p className="text-sm text-slate-400">
                      Design profissional automático
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="h-4 w-full rounded bg-slate-800"></div>
                  <div className="h-4 w-5/6 rounded bg-slate-800"></div>
                  <div className="h-4 w-4/6 rounded bg-slate-800"></div>

                  <div className="mt-6 rounded-2xl bg-slate-800 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Sparkles className="text-cyan-400" size={18} />
                      <span className="text-sm">
                        Sugestões automáticas
                      </span>
                    </div>

                    <p className="text-sm text-slate-400">
                      Melhoramos descrições e habilidades do currículo usando IA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="container mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Tudo para destacar seu perfil
          </h2>

          <p className="mt-4 text-slate-400">
            Ferramentas modernas para criar currículos profissionais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-3xl border-slate-800 bg-slate-900">
            <CardContent className="p-8">
              <div className="mb-4 w-fit rounded-2xl bg-cyan-500/20 p-3">
                <FileText className="text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">
                Modelos Modernos
              </h3>

              <p className="mt-3 text-slate-400">
                Escolha layouts profissionais para diferentes áreas.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-800 bg-slate-900">
            <CardContent className="p-8">
              <div className="mb-4 w-fit rounded-2xl bg-cyan-500/20 p-3">
                <Briefcase className="text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">
                Focado em Empregos
              </h3>

              <p className="mt-3 text-slate-400">
                Currículos organizados para chamar atenção de recrutadores.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-slate-800 bg-slate-900">
            <CardContent className="p-8">
              <div className="mb-4 w-fit rounded-2xl bg-cyan-500/20 p-3">
                <Sparkles className="text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">
                IA Integrada
              </h3>

              <p className="mt-3 text-slate-400">
                Receba sugestões automáticas para melhorar seu currículo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">
          <h2 className="text-4xl font-bold">
            Comece agora gratuitamente
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Crie um currículo profissional em poucos minutos e aumente suas
            chances de conseguir uma vaga.
          </p>

          <Button className="mt-8 rounded-2xl px-10 py-6 text-lg">
            Criar Meu Currículo
          </Button>
        </div>
      </section>
    </main>
  );
}