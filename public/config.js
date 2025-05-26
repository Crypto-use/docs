module.exports = {
  openapi: '3.0.3',
  info: {
    title: 'cryptouse-server',
    description: 'cryptous-server',
    version: '1.0.0',
  },
  servers: [
    {
      description: 'Production server',
    },
  ],
  security: [
    {
      AppID: [],
    },
  ],
}
