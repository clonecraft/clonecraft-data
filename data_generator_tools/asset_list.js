const baseList = require('./base_data/clone_asset.json')
const fs = require('fs')

const assetList = []
const ASSET_MAX_ENHANCE = 10
const ASSET_STATUE_DIVIDER = ASSET_MAX_ENHANCE + 1
const BASE_IMAGE_BASE_URL =
  'https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/base-image/'
const MAIN_IMAGE_BASE_URL =
  'https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/main-image/'
const THUMBNAIL_IMAGE_BASE_URL =
  'https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/thumbnail-image/'
const THUMBNAIL_BASE_IMAGE_BASE_URL =
  'https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/thumbnail-base-image/'

generator()
genAssetJSONData()

function generator() {
  for (let i = 0; i < baseList.length; i++) {
    for (let j = 0; j < ASSET_STATUE_DIVIDER; j++) {
      const upgradeLevel = j
      const assetStatueCalcValue = upgradeLevel + 1
      const id = parseInt(baseList[i].id.toString() + j.toString().padStart(2, '0'))
      const name = j === 0 ? baseList[i].name : `${baseList[i].name} +${j}`
      const price = pricing(baseList[i].asset_grade)
      const buyable = isBuyable(upgradeLevel, baseList[i].asset_series)
      const assetData = {
        id,
        name,
        image: `${MAIN_IMAGE_BASE_URL}${baseList[i].id}.png`,
        base_image: `${BASE_IMAGE_BASE_URL}${baseList[i].id}.png`,
        thumbnail_image: `${THUMBNAIL_IMAGE_BASE_URL}${baseList[i].id}.png`,
        thumbnail_base_image: `${THUMBNAIL_BASE_IMAGE_BASE_URL}${baseList[i].id}.png`,
        asset_type: baseList[i].asset_type,
        asset_grade: baseList[i].asset_grade,
        asset_series: baseList[i].asset_series,
        price: price,
        buyable: buyable,
        upgrade_level: upgradeLevel,
        power_level: assetStatusCalculator(baseList[i].power_level, assetStatueCalcValue),
        attack: assetStatusCalculator(baseList[i].attack, assetStatueCalcValue),
        defense: assetStatusCalculator(baseList[i].defense, assetStatueCalcValue),
        hp: assetStatusCalculator(baseList[i].hp, assetStatueCalcValue),
        luck: assetStatusCalculator(baseList[i].luck, assetStatueCalcValue),
        speed: baseList[i].speed,
        evade: baseList[i].evade,
        hitrate: baseList[i].hitrate,
        divine: assetStatusCalculator(baseList[i].divine, assetStatueCalcValue),
        diabolic: assetStatusCalculator(baseList[i].diabolic, assetStatueCalcValue),
        ignis: assetStatusCalculator(baseList[i].ignis, assetStatueCalcValue),
        aqua: assetStatusCalculator(baseList[i].aqua, assetStatueCalcValue),
        aer: assetStatusCalculator(baseList[i].aer, assetStatueCalcValue),
        terra: assetStatusCalculator(baseList[i].terra, assetStatueCalcValue),
      }
      assetList.push(assetData)
    }
  }
}

function assetStatusCalculator(originalStatue, mulValue) {
  return Math.floor((originalStatue / ASSET_STATUE_DIVIDER) * mulValue)
}

// 가격을 결정해주는 함수
function pricing(grade) {
  switch (grade) {
    case 'normal':
      return 2
    case 'rare':
      return 4
    case 'unique':
      return 8
    case 'legend':
      return 16
    case 'genesis':
      return 999999999
    default:
      return 0
  }
}

// 구매 가능 여부를 결정해주는 함수
function isBuyable(upgradeLevel, assetSeries) {
  if (upgradeLevel === 0 && (assetSeries === 'Punk' || assetSeries === 'Origin')) {
    return true
  } else {
    return false
  }
}

function genAssetJSONData() {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const date = currentDate.getDate()

  const fileDate = `${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`

  fs.writeFileSync(
    `./data/asset/ex/asset_list_${fileDate}.json`,
    JSON.stringify(assetList, null, 2)
  )
  fs.writeFileSync(`./data/asset/asset_list.json`, JSON.stringify(assetList, null, 2))
}
