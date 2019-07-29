export default {
  title: 'Hoppin Design System',
  description: 'Getting consistent design at Hoppin',
  src: './src',
  themeConfig: {
    colors: {
      primary: '#44E2D6',
    },
    showPlaygroundEditor: true,
  },
  wrapper: 'src/components/HoppinDesignProvider/HoppinDesignProvider',
  notUseSpecifiers: true,
  filterComponents: files =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
