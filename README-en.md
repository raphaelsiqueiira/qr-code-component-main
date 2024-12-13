# Frontend Mentor - QR Code Component Solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
- [Links](#links)
- [My Process](#my-process)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continuous Development](#continuous-development)
- [Helpful Resources](#helpful-resources)
- [Author](#author)
- [Thanks](#thanks)

## Overview

This project features a QR code component, designed to be simple, responsive, and accessible. It directs users to the [Frontend Mentor](https://www.frontendmentor.io/) website when they scan the displayed QR code. The layout uses semantic HTML and modern CSS, ensuring a clean design that is aligned with good front-end development practices.

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/qr-code-component-using-css-grid-and-variables-PJLcAKFpW)
- Live Site URL: [Live Site](https://raphaelsiqueiira.github.io/qr-code-component-main/)

## My Process

### Built with

- Semantic HTML5 markup
- CSS custom properties (`:root`)
- Flexbox
- CSS Grid
- Responsive Design
- Smooth CSS transitions on hover

### What I learned

During the development of this project, I improved my knowledge in:

1. **Using CSS variables:** Variables helped to keep the code cleaner and easier to update. Colors, spacing, and fonts were defined in the global scope using the `:root` selector.

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

2. **CSS Grid:** The main layout was structured using CSS Grid to create a well-organized and adaptable interface.

 ```css
 main.contant-container {
 display: grid;
 grid-template-rows: auto auto;
 gap: var(--medium-spacing);
}
```

3. **Transition Effects:** I added a smooth transition to create a nice interaction when the component is hovered.

```css
main.contant-container:hover {
transform: scale(1.05);
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
```

### Ongoing Development

- **Semantic HTML:** I will continue to practice the correct use of semantic elements to ensure accessibility and a solid structure for future projects.
- **Responsive Design:** I will look to further explore modern responsive design techniques, including advanced media queries and relative units like `em` and `rem`.
- **CSS Animations:** I plan to study advanced animations and transitions to create more interactive and dynamic experiences. - **JavaScript:** My next goal is to incorporate JavaScript to add interactive functionality to projects like this.

### Useful Resources

- [Complete Guide to Flexbox (Origamid)](https://origamid.com/projects/flexbox-complete-guide/) - Excellent resource for understanding and applying Flexbox concepts.

- [Custom Properties in CSS (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Detailed article on CSS variables.

- [CSS Grid Guide (CSS-Tricks)](https://css-tricks.com/snippets/css/complete-guide-grid/) - A comprehensive guide to CSS Grid.

## Author

- Frontend Mentor - [@raphaelsiqueiira](https://www.frontendmentor.io/profile/raphaelsiqueiira)

## Acknowledgements

Thanks to [Nicholas Gerbach](https://github.com/Nick-Gersbach) for making his [qr-code-component](https://github.com/Practical-Web-Dev/qr-code-component) repository available, which served as the initial inspiration for this project.

---

If you are also working on Frontend Mentor challenges, I would love to see your solution!