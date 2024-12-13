# Frontend Mentor - Solução do Componente de Código QR

Esta é uma solução para o [desafio do componente de código QR no Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação construindo projetos realistas.

## Índice

- [Visão Geral](#visão-geral)
  - [Links](#links)
- [Meu Processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão Geral

Este projeto apresenta um componente de código QR, desenvolvido para ser simples, responsivo e acessível. Ele direciona os usuários ao site do [Frontend Mentor](https://www.frontendmentor.io/) ao escanear o código QR exibido. O layout utiliza HTML semântico e CSS moderno, garantindo um design clean e alinhado com boas práticas de desenvolvimento front-end.

### Links

- URL da Solução: [Solução](https://www.frontendmentor.io/solutions/qr-code-component-using-css-grid-and-variables-PJLcAKFpW)
- URL do Site ao Vivo: [Site ao Vivo](https://raphaelsiqueiira.github.io/qr-code-component-main/)

## Meu Processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas do CSS (`:root`)
- Flexbox
- CSS Grid
- Design Responsivo
- Transições suaves de CSS para hover

### O que eu aprendi

Durante o desenvolvimento deste projeto, aperfeiçoei meus conhecimentos em:

1. **Uso de variáveis CSS:** As variáveis ajudaram a manter um código mais limpo e fácil de atualizar. As cores, espaçamentos e fontes foram definidos no escopo global usando o seletor `:root`.

   ```css
   :root {
     --slate-900: #1f314f;
     --slate-500: #68778d;
     --slate-300: #d5e1ef;
     --white: #ffffff;

     --font-heading: bold 22px/120% "Outfit", sans-serif;
     --font-paragraph: regular 15px/140% "Outfit", sans-serif;

     --large-spacing: 40px;
     --medium-spacing: 24px;
     --small-spacing: 16px;
   }
   ```

2. **CSS Grid:** O layout principal foi estruturado usando CSS Grid para criar uma interface bem organizada e adaptável.

   ```css
   main.contant-container {
     display: grid;
     grid-template-rows: auto auto;
     gap: var(--medium-spacing);
   }
   ```

3. **Efeitos de transição:** Adicionei uma transição suave para criar uma interação agradável quando o componente é hoverado.

   ```css
   main.contant-container:hover {
     transform: scale(1.05);
     box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
   }
   ```

### Desenvolvimento contínuo

- **HTML Semântico:** Continuarei praticando o uso correto de elementos semânticos para garantir acessibilidade e uma estrutura sólida para projetos futuros.
- **Design Responsivo:** Buscarei explorar ainda mais técnicas modernas de design responsivo, incluindo media queries avançadas e unidades relativas como `em` e `rem`.
- **Animações CSS:** Pretendo estudar animações e transições avançadas para criar experiências mais interativas e dinâmicas.
- **JavaScript:** Meu próximo objetivo é incorporar JavaScript para adicionar funcionalidades interativas a projetos como este.

### Recursos úteis

- [Guia completo de Flexbox (Origamid)](https://origamid.com/projetos/flexbox-guia-completo/) - Excelente recurso para entender e aplicar conceitos de Flexbox.
- [Propriedades personalizadas no CSS (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties) - Artigo detalhado sobre variáveis CSS.
- [CSS Grid Guide (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/) - Um guia abrangente para CSS Grid.

## Autor

- Frontend Mentor - [@raphaelsiqueiira](https://www.frontendmentor.io/profile/raphaelsiqueiira)

## Agradecimentos

Agradeço ao [Nicholas Gerbach](https://github.com/Nick-Gersbach) por disponibilizar seu repositório [qr-code-component](https://github.com/Practical-Web-Dev/qr-code-component), que serviu como inspiração inicial para este projeto.

---

Se você também está trabalhando em desafios do Frontend Mentor, adoraria ver sua solução!