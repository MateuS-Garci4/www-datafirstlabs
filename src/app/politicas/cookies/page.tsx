import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Informações sobre o uso de cookies no site da DataFirst.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      current="/politicas/cookies/"
      title="Política de Cookies"
      lead="Como este site utiliza cookies e tecnologias semelhantes."
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos armazenados no seu navegador que permitem lembrar informações
        sobre a sua visita.
      </p>

      <h2>2. Como usamos</h2>
      <p>
        Atualmente, este site <strong>não utiliza cookies de rastreamento, publicidade ou
        análise</strong>. Podem existir apenas cookies estritamente necessários, definidos pelo provedor
        de hospedagem, para o funcionamento e a segurança do site.
      </p>
      <p>
        Caso passemos a utilizar ferramentas de análise de audiência, esta política será atualizada e,
        quando exigido, solicitaremos o seu consentimento.
      </p>

      <h2>3. Serviços de terceiros</h2>
      <p>
        Ao clicar em links para WhatsApp, LinkedIn ou Instagram, você será direcionado a esses serviços,
        que possuem políticas de cookies próprias.
      </p>

      <h2>4. Como gerenciar</h2>
      <p>
        Você pode bloquear ou excluir cookies nas configurações do seu navegador. Dúvidas:{" "}
        <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>.
      </p>
    </LegalPage>
  );
}
