const fs = require('fs')
const jsondata = require('../data/asset/asset_list.json')

const data = []

const firstData = `INSERT INTO "Asset"(id, name, image, base_image, asset_type, asset_grade, asset_series, upgrade_level, power_level, attack, defense, luck, speed, evade, hitrate, divine, diabolic, ignis, aqua, aer, terra)
VALUES
(0, 'None', $$https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/main-image/0.png$$, $$https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/base-image/0.png$$, 'none', 'none', 'none', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),`
data.push(firstData)

for (let i = 0; i < jsondata.length; i++) {
  const {
    id,
    name,
    image,
    base_image,
    asset_type,
    asset_grade,
    asset_series,
    upgrade_level,
    power_level,
    attack,
    defense,
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
  } = jsondata[i]
  if (i === jsondata.length - 1) {
    data.push(
      `(${id}, $$${name}$$, $$${image}$$, $$${base_image}.png$$, $$${asset_type}$$, $$${asset_grade}$$, $$${asset_series}$$,${power_level}, ${upgrade_level}, ${attack}, ${defense}, ${luck}, ${speed}, ${evade}, ${hitrate}, ${divine}, ${diabolic}, ${ignis}, ${aqua}, ${aer}, ${terra});`
    )
  } else {
    data.push(
      `(${id}, $$${name}$$, $$${image}$$, $$${base_image}.png$$, $$${asset_type}$$, $$${asset_grade}$$, $$${asset_series}$$,${power_level}, ${upgrade_level}, ${attack}, ${defense}, ${luck}, ${speed}, ${evade}, ${hitrate}, ${divine}, ${diabolic}, ${ignis}, ${aqua}, ${aer}, ${terra}),`
    )
  }
}

fs.writeFileSync('./data/asset_sql/asset_list.sql', data.join('\n'))
