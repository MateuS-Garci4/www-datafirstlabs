import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Segurança e Confidencialidade",
  description:
    "Compromissos da DataFirst com a segurança da informação e a confidencialidade dos dados de clientes.",
};

export default function SegurancaPage() {
  return (
    <LegalPage
      current="/politicas/seguranca/"
      title="Segurança e Confidencialidade"
      lead="Trabalhamos com dados estratégicos dos nossos clientes. Protegê-los é parte central do nosso serviço."
    >
      <h2>1. Confidencialidade</h2>
      <p>
        Todas as informações de clientes acessadas durante um projeto são tratadas como
        confidenciais. Firmamos acordo de confidencialidade (NDA) sempre que solicitado e
        estendemos essa obrigação a todos os profissionais envolvidos.
      </p>

      <h2>2. Princípio do menor privilégio</h2>
      <p>
        Solicitamos apenas os acessos estritamente necessários a cada entrega, preferencialmente
        com credenciais individuais, rastreáveis e com prazo de validade. Os acessos são revogados
        ao fim do projeto.
      </p>

      <h2>3. Minimização e anonimização</h2>
      <p>
        Sempre que possível, trabalhamos com dados anonimizados, pseudonimizados ou amostrais,
        e evitamos copiar dados para fora do ambiente do cliente.
      </p>

      <h2>4. Boas práticas técnicas</h2>
      <ul>
        <li>criptografia de dados em trânsito e, quando aplicável, em repouso;</li>
        <li>gestão segura de segredos e credenciais (nunca em código-fonte);</li>
        <li>versionamento, revisão de código e ambientes separados de desenvolvimento e produção;</li>
        <li>logs e monitoramento de pipelines e automações;</li>
        <li>autenticação multifator nas ferramentas utilizadas pela equipe.</li>
      </ul>

      <h2>5. LGPD nos projetos</h2>
      <p>
        Quando um projeto envolve dados pessoais, atuamos como operadores, seguindo as instruções
        do cliente (controlador), e apoiamos a adequação dos processos de dados à LGPD.
      </p>

      <h2>6. Encerramento do projeto</h2>
      <p>
        Ao final do contrato, devolvemos ou eliminamos de forma segura os dados e materiais do
        cliente, conforme acordado, e entregamos a documentação técnica das soluções construídas.
      </p>

      <h2>7. Incidentes</h2>
      <p>
        Em caso de suspeita de incidente de segurança envolvendo dados de clientes, comunicamos
        o cliente imediatamente e colaboramos nas medidas de contenção e nas comunicações exigidas
        por lei. Para reportar uma vulnerabilidade, escreva para{" "}
        <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.
      </p>
    </LegalPage>
  );
}
