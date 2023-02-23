const fs = require('fs')
const jsonData = require('../data/asset_metadata/asset_metadata.json')

for (let i = 0; i < jsonData.length; i++) {
  const id = jsonData[i].id
  fs.writeFileSync(`./metadata/cnd-asset/${id}`, JSON.stringify(jsonData[i]), (err) => {
    console.log(err)
  })
}