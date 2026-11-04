import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site da DataFirst.",
};

export default function TermosPage() {
  return (
    <LegalPage
      current="/politicas/termos/"
      title="Termos de Uso"
      lead="Condições gerais para a utilização deste site."
    >
      <h2>1. Aceitação</h2>
      <p>
        Ao acessar este site, você concorda com estes Termos de Uso. Caso não concorde, recomendamos
        que não utilize o site.
      </p>

      <h2>2. Finalidade do site</h2>
      <p>
        Este site tem caráter institucional e informativo, apresentando a {company.name} e seus
        serviços. As informações aqui contidas não constituem proposta comercial vinculante; condições
        de cada projeto são definidas em proposta e contrato específicos.
      </p>

      <h2>3. Propriedade intelectual</h2>
      <p>
        A marca, o logotipo, a identidade visual, os textos e demais conteúdos deste site pertencem à{" "}
        {company.legalName} ou são utilizados com autorização, sendo protegidos pela legislação de
        propriedade intelectual. É proibida sua reprodução sem autorização prévia por escrito.
      </p>

      <h2>4. Links externos</h2>
      <p>
        O site pode conter links para serviços de terceiros (como WhatsApp, LinkedIn e Instagram).
        Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses serviços.
      </p>

      <h2>5. Limitação de responsabilidade</h2>
      <p>
        Empregamos esforços para manter as informações corretas e atualizadas, mas não garantimos que
        o site esteja livre de erros ou interrupções.
      </p>

      <h2>6. Privacidade</h2>
      <p>
        O tratamento de dados pessoais é regido pela nossa{" "}
        <a href="/politicas/privacidade/">Política de Privacidade</a>.
      </p>

      <h2>7. Legislação e foro</h2>
      <p>
        Estes termos são regidos pelas leis da República Federativa do Brasil. Dúvidas podem ser
        enviadas para <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
