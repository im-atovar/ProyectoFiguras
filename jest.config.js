export default {
  testEnvironment: "node",
  transform: {
     "^.+\\.js$": "babel-jest",
  },
  globals: {
    "vmModules": true,  // Reduce redundancia en el warning
    }
};