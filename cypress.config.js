const { defineConfig } = require("cypress");

module.exports = defineConfig({ e2e: 
    { baseUrl: 'https://www.saucedemo.com/', 
      baseUrlApi: "https://api.qa.soum.sa/api-v2/rest/api/v1"
}, 
})