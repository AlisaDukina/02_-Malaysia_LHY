module.exports = {
  content: ['./dist/index.html', './dist/assets/*.js'],
  css: ['./dist/assets/css/*.css'],
  output: './dist/assets/css/',
  safelist: [
    /^active$/,
    /^hover$/,
    /^focus$/,
    /^disabled$/,
    /^loading$/,
    /^error$/,
    /^success$/,
    /^animate-/,
    /^transition-/,
    /^transform-/,
  ],
  // Исключения для важных CSS правил
  blocklist: [],
  // Сохраняем @font-face, @keyframes, @media и другие важные правила
  fontFace: true,
  keyframes: true,
  variables: true,
  // Дополнительные исключения
  rejected: false,
  // Сохраняем все CSS переменные
  cssVariables: true,
};
