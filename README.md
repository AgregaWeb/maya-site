# Maya Assessoria Obstétrica — Site

## Estrutura de arquivos

```
maya-site/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Todos os estilos
├── js/
│   └── main.js         ← Animações, menu, FAQ accordion
├── assets/             ← Coloque aqui as fotos reais
│   ├── hero-foto.jpg
│   ├── equipe.jpg
│   └── ...
└── README.md
```

## Como abrir no Antigravity (ou qualquer editor)

1. Extraia o `.zip` em uma pasta
2. Abra a pasta `maya-site/` no Antigravity
3. Abra o arquivo `index.html` no navegador para visualizar

## Como personalizar

### 1. WhatsApp
Substitua todos os `https://wa.me/5500000000000` pelo número real:
```
https://wa.me/55XXYYYYYYYYYY
```
(55 = Brasil, XX = DDD, YYYYYYYYYY = número com 9 dígitos)

### 2. Fotos reais
No `index.html`, localize os comentários:
```html
<!-- Substitua esta div por uma tag <img src="assets/hero-foto.jpg"> -->
```
Coloque suas fotos na pasta `assets/` e troque os placeholders por tags `<img>`.

**Exemplo Hero:**
```html
<img src="assets/hero-foto.jpg" alt="Gestante acompanhada pela Maya" 
     style="width:100%;height:100%;object-fit:cover;">
```

**Exemplo Sobre:**
```html
<img src="assets/equipe.jpg" alt="Equipe Maya Assessoria" 
     style="width:100%;height:100%;object-fit:cover;">
```

### 3. COREN
Substitua `COREN [número]` pelo número real do registro no rodapé.

### 4. E-mail
Substitua `contato@mayaobstetrica.com.br` pelo e-mail real.

### 5. Depoimentos
Substitua os depoimentos fictícios pelos reais das clientes no `index.html`.

### 6. Estatísticas
No Hero, ajuste os números reais:
- `200+` famílias acompanhadas
- `5+` anos de atuação  
- `98%` satisfação

## Tecnologias usadas

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, animações)
- JavaScript vanilla (sem dependências)
- Google Fonts: Playfair Display + Cormorant Garamond + DM Sans

## Funcionalidades

- ✅ Nav fixa com efeito scroll
- ✅ Menu hamburguer mobile
- ✅ Animações reveal ao scroll (IntersectionObserver)
- ✅ FAQ accordion animado
- ✅ Botão WhatsApp flutuante com bounce
- ✅ Cards com hover effects
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Scroll suave entre seções
