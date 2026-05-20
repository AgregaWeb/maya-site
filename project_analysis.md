# Análise do Projeto: Maya Assessoria Obstétrica

## Visão Geral
O projeto **Maya Assessoria Obstétrica** é um site institucional estático (Landing Page) desenvolvido para apresentar os serviços de uma equipe de enfermeiras obstétricas. O foco principal é transmitir profissionalismo, acolhimento e uma abordagem baseada em evidências científicas.

## Estrutura de Diretórios
A estrutura do projeto é simples e direta, típica de projetos web estáticos:
- `index.html`: Arquivo principal contendo toda a estrutura semântica da página.
- `css/style.css`: Arquivo de folha de estilos contendo variáveis, grid, flexbox e animações.
- `js/main.js`: Arquivo de scripts contendo a lógica de interatividade (menu, animações de scroll, FAQ).
- `assets/`: Pasta destinada ao armazenamento de imagens e recursos visuais do site.
- `README.md`: Documentação básica explicando a estrutura e como personalizar o site.

## Tecnologias Utilizadas
Até o momento, o projeto não utiliza frameworks complexos ou gerenciadores de pacotes. A stack é puramente nativa:
- **HTML5**: Estruturação semântica de alta qualidade.
- **CSS3**: Estilização com uso avançado de variáveis nativas (Custom Properties), Flexbox e CSS Grid para responsividade.
- **JavaScript (Vanilla)**: Interatividade leve sem dependência de bibliotecas externas (como jQuery).
- **Fontes Externas**: Integração com Google Fonts (Playfair Display, Cormorant Garamond, DM Sans).

## Funcionalidades Identificadas no `index.html`
1. **Navegação (Nav)**: Menu fixo com efeito de transição ao rolar a página e menu "hamburguer" para dispositivos móveis.
2. **Hero Section**: Área de destaque inicial com estatísticas dinâmicas e chamada para ação (CTA).
3. **Sobre**: Apresentação da equipe com destaques para certificações (COREN).
4. **Serviços**: Descrição dos programas oferecidos (Pré-natal, Educação Perinatal, Suporte no Parto, Pós-parto).
5. **Diferenciais e Jornada**: Seções explicativas sobre a metodologia de trabalho.
6. **Depoimentos e Blog**: Prova social e área para marketing de conteúdo.
7. **FAQ**: Seção de perguntas frequentes em formato "accordion" (sanfona).
8. **WhatsApp Flutuante**: Botão de contato rápido fixo no canto da tela.

## Observações e Próximos Passos
O usuário solicitou a possibilidade de executar o `npm` e instalar pacotes. Como o projeto atualmente é estático e não possui um `package.json`, o primeiro passo técnico para atender a essa solicitação é **inicializar o projeto como um pacote Node.js**.

Isso permitirá a instalação de ferramentas como:
- Pré-processadores CSS (Sass/Less).
- Minificadores de código e otimizadores de imagem.
- Transpiladores Babel (caso necessário no futuro).
- Servidores locais de desenvolvimento (como `live-server` ou `vite`).

---
*Análise gerada em preparação para as próximas solicitações.*
