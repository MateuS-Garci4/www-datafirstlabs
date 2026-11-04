import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a DataFirst trata dados pessoais, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <LegalPage
      current="/politicas/privacidade/"
      title="Política de Privacidade"
      lead="Transparência sobre como tratamos dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
    >
      <h2>1. Quem somos</h2>
      <p>
        Esta política se aplica ao site e aos canais de atendimento da {company.legalName},
        inscrita no CNPJ sob o nº {company.cnpj} (“DataFirst”, “nós”), que atua como
        controladora dos dados pessoais tratados nesses canais.
      </p>

      <h2>2. Quais dados coletamos</h2>
      <p>
        Nosso site não possui formulários nem exige cadastro. Tratamos apenas os dados que
        você nos envia voluntariamente ao entrar em contato por WhatsApp, e-mail ou redes
        sociais, como:
      </p>
      <ul>
        <li>nome, empresa e cargo;</li>
        <li>e-mail e telefone;</li>
        <li>informações que você compartilhar sobre o seu projeto ou necessidade.</li>
      </ul>
      <p>
        O provedor de hospedagem do site pode registrar dados técnicos de acesso (como endereço
        IP, data e hora e navegador) para fins de segurança e funcionamento.
      </p>

      <h2>3. Para que usamos os dados</h2>
      <ul>
        <li>responder às suas solicitações e enviar propostas comerciais;</li>
        <li>executar contratos e prestar os serviços contratados;</li>
        <li>cumprir obrigações legais e regulatórias;</li>
        <li>garantir a segurança do site e prevenir fraudes.</li>
      </ul>

      <h2>4. Bases legais</h2>
      <p>
        Tratamos dados pessoais com fundamento no art. 7º da LGPD, principalmente para
        procedimentos preliminares e execução de contrato, cumprimento de obrigação legal,
        legítimo interesse e, quando aplicável, consentimento.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        Não vendemos dados pessoais. Podemos compartilhá-los apenas com fornecedores
        essenciais à operação (como provedores de e-mail, hospedagem e ferramentas de
        comunicação), sempre sob obrigações de confidencialidade, ou com autoridades, quando
        exigido por lei.
      </p>

      <h2>6. Armazenamento e segurança</h2>
      <p>
        Mantemos os dados pelo tempo necessário às finalidades informadas ou pelo prazo exigido
        por lei. Adotamos medidas técnicas e administrativas para protegê-los contra acessos não
        autorizados, perda ou alteração. Saiba mais em nossa{" "}
        <a href="/politicas/seguranca/">Política de Segurança e Confidencialidade</a>.
      </p>

      <h2>7. Seus direitos</h2>
      <p>Como titular, você pode, a qualquer momento:</p>
      <ul>
        <li>confirmar a existência de tratamento e acessar seus dados;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>solicitar a portabilidade dos dados;</li>
        <li>revogar o consentimento e obter informações sobre compartilhamentos.</li>
      </ul>

      <h2>8. Encarregado (DPO) e contato</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre esta política, escreva para{" "}
        <a href={`mailto:${contact.privacyEmail}`}>{contact.privacyEmail}</a>. Você também pode
        apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>9. Alterações</h2>
      <p>
        Esta política pode ser atualizada periodicamente. A data da última atualização está
        indicada no topo desta página.
      </p>
    </LegalPage>
  );
}
