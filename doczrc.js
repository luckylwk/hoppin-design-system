export default {
  title: 'Hoppin Design System',
  description: 'Getting consistent design at Hoppin',
  port: 2000,
  src: './src',
  files: '**/*.{md,markdown,mdx}',
  themeConfig: {
    colors: {
      primary: '#44E2D6',
    },
    showPlaygroundEditor: true,
    styles: {
      root: {
        fontFamily: '"Nunito Sans", sans-serif',
        fontSize: 2,
      },
      Container: {
        p: 4,
        ml: 'auto',
        mr: 'auto',
        maxWidth: '70rem',
      },
    },
  },
  notUseSpecifiers: true,
  filterComponents: files =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
