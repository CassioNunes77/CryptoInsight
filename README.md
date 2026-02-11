# CryptoInsight

Dashboard de criptomoedas com alertas e monitoramento em tempo real. Desenvolvido com Next.js, TypeScript e TailwindCSS.

## Estrutura do Projeto

- **Dashboard** (`/`) — Visão geral do mercado, notícias e portfólio
- **Ativos** (`/ativos`) — Detalhes de criptomoedas e gráficos
- **Alertas** (`/alertas`) — Configuração de alertas personalizados
- **Premium** (`/assinatura`) — Planos e pagamento via Bitcoin
- **Auth** (`/login`, `/registro`) — Autenticação

## Design System

| Cor | Hex | Uso |
|-----|-----|-----|
| Primária | `#1A2C5B` | Cabeçalhos, fundos |
| Secundária | `#00C853` | CTAs, indicadores de alta |
| Neutro Escuro | `#333333` | Textos |
| Neutro Claro | `#F0F2F5` | Cards, fundos secundários |
| Destaque | `#2196F3` | Links, hover |
| Alerta | `#D32F2F` | Erros, indicadores de baixa |

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy no Netlify

O projeto está configurado para deploy **sem configurações extras** no Netlify:

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Conecte o repositório no [Netlify Dashboard](https://app.netlify.com)
3. Netlify detecta Next.js automaticamente e usa `npm run build`
4. Deploy concluído ✓

O arquivo `netlify.toml` apenas define o comando de build. O runtime Next.js (OpenNext) é aplicado automaticamente.
