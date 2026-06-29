export default {
  js2svg: {
    pretty: true,
    indent: 2,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertColors: false,
        },
      },
    },
  ],
};
