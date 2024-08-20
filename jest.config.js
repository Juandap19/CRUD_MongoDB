module.exports = {
    transform: {
      '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.jest.config.js' }],
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>$1'
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node']
  };
  