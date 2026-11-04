/**
 * Conteúdo editável do site DataFirst.
 *
 * Tudo o que aparece nas páginas (contatos, serviços, missão, valores…)
 * vem deste arquivo. Os campos marcados com TODO são placeholders
 * e precisam ser preenchidos antes de publicar (ver README.md).
 */

export const company = {
  name: "DataFirst",
  legalName: "DataFirst Labs Ltda.",
  cnpj: "65.082.567/0001-08",
  slogan: "Transformamos dados brutos em inteligência estratégica.",
  description:
    "Consultoria estratégica de dados: análise, engenharia, automação e governança para converter volumes complexos de dados em clareza operacional e decisões de alta precisão.",
  url: "https://datafirstlabs.com.br",
  city: "Campo Grande, MS",
  serviceArea: "Atendimento em todo o Brasil, remoto e presencial",
  hours: "Segunda a sexta, das 8h às 18h",
};

export const contact = {
  /** Somente dígitos, com DDI 55 + DDD. Ex.: 5567912345678 */
  whatsapp: "5518996511920",
  phoneDisplay: "(18) 99651-1920",
  email: "datafirstconsultoria@gmail.com",
  privacyEmail: "datafirstconsultoria@gmail.com",
  linkedin: "https://www.linkedin.com/company/datafirst", // TODO: LinkedIn
  instagram: "https://www.instagram.com/datafirst", // TODO: Instagram
  instagramHandle: "@datafirst",
  whatsappMessage:
    "Olá, DataFirst! Gostaria de conversar sobre um projeto de dados.",
};

export const whatsappUrl = (message = contact.whatsappMessage) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/solucoes/", label: "Soluções" },
  { href: "/contato/", label: "Contato" },
] as const;

export type IconName =
  | "chart"
  | "pipeline"
  | "automation"
  | "shield"
  | "cloud"
  | "brain";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  short: string;
  summary: string;
  problem: string;
  deliverables: string[];
  outcomes: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "analise-de-dados-e-bi",
    icon: "chart",
    title: "Análise de Dados & BI",
    short: "Dashboards e indicadores que mostram o que importa para a decisão.",
    summary:
      "Transformamos dados dispersos em painéis executivos e análises que respondem às perguntas certas, com indicadores confiáveis e atualizados.",
    problem:
      "Relatórios manuais, planilhas que não batem e indicadores diferentes para a mesma pergunta. A gestão decide por intuição porque não confia nos números.",
    deliverables: [
      "Mapeamento de KPIs e da árvore de indicadores do negócio",
      "Dashboards executivos e operacionais (Power BI, Looker Studio, Metabase)",
      "Modelagem semântica e camada única de métricas",
      "Análises exploratórias e diagnósticas sob demanda",
      "Capacitação dos times para autonomia analítica",
    ],
    outcomes: [
      "Uma única versão da verdade para toda a empresa",
      "Redução drástica do tempo gasto montando relatórios",
      "Decisões baseadas em sinais claros, não em intuição",
    ],
    stack: ["Power BI", "Looker Studio", "Metabase", "SQL", "Python", "DAX"],
  },
  {
    slug: "engenharia-de-dados",
    icon: "pipeline",
    title: "Engenharia de Dados",
    short: "Pipelines robustos e uma arquitetura de dados pronta para escalar.",
    summary:
      "Projetamos e construímos a infraestrutura que coleta, integra e organiza seus dados, com pipelines confiáveis, monitorados e documentados.",
    problem:
      "Dados presos em sistemas isolados (ERP, CRM, planilhas, APIs), integrações frágeis e cargas que quebram sem ninguém perceber.",
    deliverables: [
      "Arquitetura de Data Warehouse / Lakehouse",
      "Pipelines ETL/ELT batch e near real-time",
      "Integração de ERPs, CRMs, bancos e APIs",
      "Orquestração, monitoramento e alertas",
      "Modelagem dimensional e camadas bronze/prata/ouro",
    ],
    outcomes: [
      "Dados centralizados, consistentes e disponíveis no horário certo",
      "Base sólida para BI, automação e IA",
      "Menos retrabalho e menos dependência de pessoas-chave",
    ],
    stack: ["Python", "SQL", "Airflow", "dbt", "Spark", "Databricks", "BigQuery", "PostgreSQL"],
  },
  {
    slug: "automacao-de-processos",
    icon: "automation",
    title: "Automação de Processos",
    short: "Menos tarefas repetitivas, mais tempo para o que gera valor.",
    summary:
      "Automatizamos rotinas operacionais e fluxos de dados, como conciliações, relatórios, integrações e notificações, com segurança e rastreabilidade.",
    problem:
      "Equipes qualificadas presas em copiar e colar, conferir planilhas e enviar relatórios manualmente, com risco de erro a cada etapa.",
    deliverables: [
      "Diagnóstico e priorização de processos automatizáveis",
      "Automações em Python e RPA",
      "Workflows e integrações via API (n8n, Make, Power Automate)",
      "Geração e distribuição automática de relatórios",
      "Alertas inteligentes por e-mail, WhatsApp ou Teams",
    ],
    outcomes: [
      "Horas de trabalho manual devolvidas ao time",
      "Processos padronizados e auditáveis",
      "Menos erros operacionais",
    ],
    stack: ["Python", "n8n", "Power Automate", "Make", "APIs REST", "RPA"],
  },
  {
    slug: "governanca-e-qualidade-de-dados",
    icon: "shield",
    title: "Governança & Qualidade de Dados",
    short: "Dados confiáveis, seguros e em conformidade com a LGPD.",
    summary:
      "Estruturamos políticas, papéis e controles para que seus dados sejam confiáveis, bem documentados, protegidos e usados com responsabilidade.",
    problem:
      "Ninguém sabe ao certo de onde vem cada número, quem pode acessar o quê, ou se a empresa está em conformidade com a LGPD.",
    deliverables: [
      "Framework de governança: papéis, políticas e responsabilidades",
      "Catálogo e dicionário de dados",
      "Regras e monitoramento de qualidade de dados",
      "Controle de acesso e segurança da informação",
      "Adequação de processos de dados à LGPD",
    ],
    outcomes: [
      "Confiança nos dados em todos os níveis da empresa",
      "Redução de riscos regulatórios e de segurança",
      "Dados documentados e fáceis de encontrar",
    ],
    stack: ["Great Expectations", "dbt tests", "OpenMetadata", "IAM", "LGPD"],
  },
  {
    slug: "cloud-e-arquitetura",
    icon: "cloud",
    title: "Cloud & Arquitetura de Dados",
    short: "Plataformas modernas na nuvem, com custo sob controle.",
    summary:
      "Desenhamos e migramos sua plataforma de dados para a nuvem com arquitetura escalável, segura e otimizada em custo (FinOps).",
    problem:
      "Servidores locais no limite, custos de nuvem fora de controle ou uma arquitetura que não acompanha o crescimento do negócio.",
    deliverables: [
      "Assessment da arquitetura atual e roadmap",
      "Desenho de plataforma de dados moderna",
      "Migração on-premise → cloud",
      "Infraestrutura como código e boas práticas de DevOps/DataOps",
      "Otimização de custos (FinOps)",
    ],
    outcomes: [
      "Plataforma escalável e preparada para o futuro",
      "Custos previsíveis e otimizados",
      "Mais disponibilidade e segurança",
    ],
    stack: ["AWS", "Azure", "Google Cloud", "Snowflake", "Databricks", "Terraform", "Docker"],
  },
  {
    slug: "ia-e-machine-learning",
    icon: "brain",
    title: "IA & Machine Learning",
    short: "Modelos preditivos e IA generativa aplicados ao seu negócio.",
    summary:
      "Aplicamos inteligência artificial onde ela gera retorno: previsão de demanda, churn, classificação, e assistentes de IA conectados aos seus dados.",
    problem:
      "A empresa tem dados históricos valiosos, mas ainda reage aos acontecimentos em vez de antecipá-los.",
    deliverables: [
      "Identificação de casos de uso com retorno mensurável",
      "Modelos preditivos (demanda, churn, crédito, risco)",
      "Assistentes e agentes de IA generativa sobre dados internos",
      "Extração e classificação automática de documentos",
      "Deploy, monitoramento e MLOps",
    ],
    outcomes: [
      "Decisões antecipadas com base em previsões",
      "Ganho de eficiência com IA no dia a dia",
      "Modelos em produção, não só em apresentações",
    ],
    stack: ["Python", "scikit-learn", "MLflow", "LLMs", "RAG", "Vertex AI", "Azure AI"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const about = {
  intro:
    "A DataFirst é uma consultoria estratégica focada em converter volumes complexos de dados em clareza operacional e decisões de alta precisão. Por meio de automação e visualização inteligente, eliminamos a intuição da gestão executiva, entregando governança e sinais claros para o crescimento dos negócios.",
  symbol:
    'Nosso símbolo funde o caractere "F" ao conceito de "1st" (primeiro) de forma não literal. É uma estrutura geométrica minimalista que representa a essência da marca: prioridade e análise. Dados em primeiro lugar.',
  mission:
    "Transformar dados brutos em inteligência estratégica, entregando clareza operacional e decisões de alta precisão para que nossos clientes cresçam com segurança.",
  vision:
    "Ser referência nacional em consultoria de dados, reconhecida por colocar os dados em primeiro lugar em cada decisão de negócio e por entregar resultados mensuráveis.",
  values: [
    {
      title: "Tecnologia",
      text: "Dominamos a estrutura técnica dos dados e escolhemos a ferramenta certa para cada problema, não a mais popular.",
    },
    {
      title: "Autoridade",
      text: "Atuamos com profundidade técnica e postura consultiva. Recomendamos com base em evidências, com transparência.",
    },
    {
      title: "Inovação",
      text: "Buscamos continuamente novas abordagens, da automação à IA, para gerar vantagem competitiva real.",
    },
    {
      title: "Estratégia",
      text: "Todo projeto começa pelo objetivo de negócio. Tecnologia é meio; resultado é fim.",
    },
    {
      title: "Precisão",
      text: "Rigor em cada número. Dados confiáveis, validados e documentados são inegociáveis.",
    },
    {
      title: "Insights",
      text: "Não entregamos só dados, entregamos clareza: sinais acionáveis que orientam a próxima decisão.",
    },
  ],
};

export const differentials = [
  {
    title: "Foco em resultado",
    text: "Cada entrega é ligada a um indicador de negócio. Medimos o antes e o depois.",
  },
  {
    title: "Ponta a ponta",
    text: "Da coleta ao dashboard, da automação à IA: um único parceiro para toda a jornada de dados.",
  },
  {
    title: "Transferência de conhecimento",
    text: "Documentamos tudo e capacitamos seu time. Você não fica dependente da consultoria.",
  },
  {
    title: "Segurança e LGPD",
    text: "Boas práticas de segurança da informação e privacidade desde o primeiro dia.",
  },
];

export const process = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos seu negócio, seus dados e suas dores. Mapeamos oportunidades e prioridades.",
  },
  {
    step: "02",
    title: "Estratégia",
    text: "Desenhamos a solução e um roadmap com entregas incrementais e metas claras.",
  },
  {
    step: "03",
    title: "Implementação",
    text: "Construímos em ciclos curtos, com validação contínua junto ao seu time.",
  },
  {
    step: "04",
    title: "Evolução",
    text: "Monitoramos, otimizamos e capacitamos para que a solução gere valor contínuo.",
  },
];

export const legalUpdatedAt = "3 de novembro de 2026";
