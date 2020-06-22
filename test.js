const fs = require('fs')

function executeSpecFiles(folderPath) {
  fs.opendir(folderPath,  async (err, dir) => {
    for await (const dirItem of dir) {
      if (dirItem.isDirectory()) {
        executeSpecFiles(`${folderPath}/${dirItem.name}`)
      } else {
        if (/.*?(\.spec).js/.test(dirItem.name)) {
          require(`${folderPath}/${dirItem.name}`)
        }
      }
    }
  })
}

// Recursively execute all test spec file in the project
executeSpecFiles('.')
