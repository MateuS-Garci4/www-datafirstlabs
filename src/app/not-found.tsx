import { Symbol } from "@/components/Logo";
import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="aurora grain relative overflow-hidden">
      <Container className="relative z-10 flex min-h-[85svh] flex-col items-start justify-center pt-32 pb-20">
        <Symbol className="mb-10 h-16" />
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-gold">Erro 404</p>
        <h1 className="mt-4 max-w-2xl font-mono text-4xl font-bold leading-tight text-white sm:text-5xl">
          Este dado não foi encontrado.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/80">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-10">
          <Button href="/" arrow>
            Voltar ao início
          </Button>
        </div>
      </Container>
    </section>
  );
}
