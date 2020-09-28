export default {
  title: 'Orbiit Design System',
  description: 'Getting consistent design at Orbiit',
  port: 2000,
  src: './src',
  files: '**/*.{md,markdown,mdx}',
  themeConfig: {
    colors: {
      primary: '#008CE6',
    },
    showPlaygroundEditor: true,
    styles: {
      root: {
        fontFamily: 'sans-serif',
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
