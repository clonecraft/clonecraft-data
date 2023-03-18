const fs = require('fs')
const assetListJsonData = require('../data/asset_list/asset_list.json')
const { sha256 } = require('js-sha256')

let assetList = []

function genMetadata(
  id,
  name,
  image,
  base_image,
  thumbnail_image,
  thumbnail_base_image,
  description,
  asset_id,
  asset_type,
  asset_grade,
  asset_series,
  price,
  buyable,
  upgrade_level,
  power_level,
  attack,
  defense,
  hp,
  luck,
  speed,
  evade,
  hitrate,
  divine,
  diabolic,
  ignis,
  aqua,
  aer,
  terra
) {
  return {
    id,
    name,
    image,
    base_image,
    thumbnail_image,
    thumbnail_base_image,
    description,
    asset_id,
    asset_type,
    asset_grade,
    asset_series,
    price,
    buyable,
    upgrade_level,
    power_level,
    attack,
    defense,
    hp,
    luck,
    speed,
    evade,
    hitrate,
    divine,
    diabolic,
    ignis,
    aqua,
    aer,
    terra,
    attributes: [
      {
        trait_type: 'asset id',
        value: asset_id.toString(),
      },
      {
        trait_type: 'asset type',
        value: asset_type,
      },
      {
        trait_type: 'asset grade',
        value: asset_grade,
      },
      {
        trait_type: 'asset series',
        value: asset_series,
      },
      {
        trait_type: 'upgrade level',
        display_type: 'number',
        value: upgrade_level,
      },
      {
        trait_type: 'power level',
        display_type: 'number',
        value: power_level,
      },
      {
        trait_type: 'attack',
        value: attack,
        max_value: 1000,
      },
      {
        trait_type: 'defense',
        value: defense,
        max_value: 1000,
      },
      {
        trait_type: 'hp',
        value: defense,
        max_value: 1000,
      },
      {
        trait_type: 'luck',
        value: luck,
        max_value: 1000,
      },
      {
        trait_type: 'speed',
        value: speed,
        max_value: 5,
      },
      {
        trait_type: 'evade',
        value: evade,
        max_value: 8,
      },
      {
        trait_type: 'hitrate',
        value: hitrate,
        max_value: 8,
      },
      {
        trait_type: 'divine',
        value: divine,
        max_value: 1000,
      },
      {
        trait_type: 'diabolic',
        value: diabolic,
        max_value: 1000,
      },
      {
        trait_type: 'ignis',
        value: ignis,
        max_value: 1000,
      },
      {
        trait_type: 'aqua',
        value: aqua,
        max_value: 1000,
      },
      {
        trait_type: 'aer',
        value: aer,
        max_value: 1000,
      },
      {
        trait_type: 'terra',
        value: terra,
        max_value: 1000,
      },
    ],
  }
}
generator()
genAssetJSONData()
genChecksum()

function generator() {
  for (let i = 0; i < assetListJsonData.length; i++) {
    const {
      id,
      name,
      image,
      base_image,
      thumbnail_image,
      thumbnail_base_image,
      description,
      asset_id,
      asset_type,
      asset_grade,
      asset_series,
      price,
      buyable,
      upgrade_level,
      power_level,
      attack,
      defense,
      hp,
      luck,
      speed,
      evade,
      hitrate,
      divine,
      diabolic,
      ignis,
      aqua,
      aer,
      terra,
    } = assetListJsonData[i]
    const assetData = genMetadata(
      id,
      name,
      image,
      base_image,
      thumbnail_image,
      thumbnail_base_image,
      description,
      asset_id,
      asset_type,
      asset_grade,
      asset_series,
      price,
      buyable,
      upgrade_level,
      power_level,
      attack,
      defense,
      hp,
      luck,
      speed,
      evade,
      hitrate,
      divine,
      diabolic,
      ignis,
      aqua,
      aer,
      terra
    )
    assetList.push(assetData)
  }
}

function genChecksum() {
  const hash = sha256(JSON.stringify(assetList, null, 2))
  fs.writeFileSync(`./data/asset_metadata/checksum`, hash)
}

function genAssetJSONData() {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const date = currentDate.getDate()

  const fileDate = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`

  fs.writeFileSync(
    `./data/asset_metadata/ex/asset_metadata_${fileDate}.json`,
    JSON.stringify(assetList, null, 2)
  )
  fs.writeFileSync(`./data/asset_metadata/asset_metadata.json`, JSON.stringify(assetList, null, 2))
}
