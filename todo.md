# Coins Research - Task List

## Data and AI + API Documentation Revamp (Current)

### Data and AI Implementation
- [x] Atualizar rotas e navegação (Metrics → Data and AI)
- [x] Implementar página Data and AI com métricas financeiras
- [x] Adicionar visualizações de dados do CSV/Excel
- [x] Integrar logos de parceiros na página
- [x] Criar dashboards de KPIs operacionais

### API Documentation Revamp (Avenia-style)
- [ ] Analisar documentação atual e guia Avenia
- [ ] Revisar estrutura de navegação e headings
- [ ] Adicionar seção Getting Started com quick start
- [ ] Documentar todos os endpoints com exemplos completos
- [ ] Criar tabela de error codes e troubleshooting
- [ ] Adicionar SDKs snippets (Node.js, Python)
- [ ] Implementar use-case end-to-end com sequence
- [ ] Criar style guide para futuras atualizações
- [ ] Testar e fazer commit/push

## Completed Tasks
- [x] Infrastructure Page Redesign - tabs + tabela limpa
- [x] Mover "The Brazil Blueprint" para Blueprint page
- [x] Ajustar Global South Pre-Selection
- [x] Adicionar 16 novos parceiros

### Global UX Improvements
- [ ] Adicionar botão de voltar em todas as páginas
- [ ] Verificar navegação consistente em mobile

### UX Improvements
- [x] Transformar "How Each Rail Works" em accordion collapsible
- [ ] Adicionar botão de voltar em todas as páginas

### Content Corrections
- [x] Corrigir descrição do Rail 4 (OCBS) - é Convert/Swap, não apenas treasury management
- [x] Revisar todas as menções a OCBS no site para refletir funcionalidade de conversão on-chain

## Authentication System Implementation
- [x] Design database schema (users, access_requests, whitelisted_emails)
- [x] Implement password authentication backend
- [x] Add Google OAuth social login
- [x] Create login/signup UI with social buttons
- [x] Build "Request Access" flow for non-approved users
- [x] Create admin dashboard for approving access requests
- [x] Add authentication middleware to protect all routes
- [ ] Test authentication flows (password, OAuth, approval)
- [ ] Create script to add first admin user
- [ ] Deploy and verify in production

## Domain-Based Auto-Approval & Email Notifications
- [x] Adicionar auto-approve para domínios @coins.xyz, @coins.ph, @parafi.com
- [x] Remover Google OAuth login (apenas email/password)
- [x] Implementar senha padrão "coins99" com força de troca no primeiro login
- [x] Adicionar campo mustChangePassword no schema de users
- [x] Criar página de "Change Password" forçada
- [x] Implementar email notifications para access requests
- [x] Configurar emails de destino: gui@coins.ph, gui@base-xyz.com, gui@coins.xyz, geral@guilabird.com
- [ ] Testar fluxo completo de signup com domínio aprovado
- [ ] Testar fluxo de request access com email notification
- [ ] Deploy para produção

## Authentication Refinements (Security & UX)
- [x] Atualizar senha padrão para "coins99!" (com exclamação)
- [x] Adicionar validação de senha (mínimo 8 chars, letra + número)
- [x] Bloquear reutilização da senha padrão
- [x] Adicionar 6 emails específicos ao whitelist
- [ ] Implementar rate limiting (5 tentativas/minuto por IP)
- [ ] Adicionar bloqueio temporário após 5 erros (10 minutos)
- [ ] Implementar CAPTCHA para IPs suspeitos
- [ ] Criar logs de auditoria (tentativas, falhas, IPs)
- [ ] Implementar "Forgot Password" com código de 6 dígitos
- [ ] Código válido por 10 minutos
- [ ] Melhorar mensagens de UX conforme especificação
- [ ] Adicionar painel admin para gerenciar emails aprovados
- [ ] Adicionar visualização de logs no admin panel
- [ ] Adicionar reset de senha pelo admin
- [ ] Mostrar usuários ativos e último login

## Authentication Debug & Fixes
- [ ] Adicionar gui@coins.ph e gui@coins.xyz ao whitelist
- [ ] Debugar erro "Invalid email or password" no login
- [ ] Verificar redirecionamento para change-password após login com senha padrão
- [ ] Testar fluxo completo de signup → login → change password

## TRPC Authentication Fix (URGENT)
- [ ] Investigar por que servidor retorna HTML ao invés de JSON
- [ ] Verificar configuração de rotas TRPC no servidor
- [ ] Verificar se /api/trpc endpoint está configurado corretamente
- [ ] Testar login após correção

## Simple Fixed Password Solution (TEMPORARY)
- [x] Criar página de login simples com senha fixa
- [x] Usar localStorage para manter sessão
- [x] Remover complexidade TRPC/database temporariamente
- [x] Testar e fazer deploy

## Password Input Fix
- [x] Permitir paste (colar) no campo de senha
- [ ] Testar e fazer deploy
