# CloneCraft Data

### - /data
##### 1. asset
###### cnd-asset nft의 데이터

```json
// 데이터 구조
{
    "id": 1011000100, //nft의 id, 총 10자리, 앞 세자리는 에셋타입, 다음 한자리는 에셋등급, 다음 네자리는 등급별 순번, 마지막 두자리는 강화횟수로 구분됨 ex) 101(타입)1(등급-제네시스)0001(등급별 생성 순번)00(강화횟수)
    "name": "CxNxD Toon #1", // nft의 이름, 강화될 경우 이름 뒤에 + 강화횟수가 붙음
    "image": "https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/main-image/10110001.png", // nft의 보여지는 이미지
    "base_image": "https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/base-image/10110001.png", // 클론 v3 이미지 조합에 사용될 이미지
    "thumbnail_image": "https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/thumbnail-image/10110001.png", // 클론 v3 이미지 조합에 사용될 이미지
    "asset_type": "background", //에셋 타입, 총 12개로 구분됨
    "asset_grade": "genesis", //에셋 등급, 총 5개로 구분됨
    "asset_series": "Art", //에셋 시리즈, nft기획시 묶어서 기획된 nft나 비슷한 성향의 nft를 나타냄
    "upgrade_level": 0, // 에셋의 강화 횟수
    "power_level": 1090, // 에셋 스테이터스의 종합 수치
    "attack": 90,
    "defense": 90,
    "hp": 90,
    "luck": 90,
    "speed": 5,
    "evade": 8,
    "hitrate": 8,
    "divine": 90,
    "diabolic": 90,
    "ignis": 90,
    "aqua": 90,
    "aer": 90,
    "terra": 90
},
```



##### 2. skill
###### clonecraft v3에 들어가는 스킬 데이터

```json
// 데이터 구조
{
    "id": 1, // 스킬의 id
    "name": "자원 생산 증가", // 스킬의 이름
    "skill_type": "increase_resource", // 스킬의 타입
    "property": 0, // 스킬의 속성, 0: 속성없음, 1: divine, 2: diabolic, 3: ignis, 4: aqua, 5: aer, 6: terra
    "level": 1, // 스킬의 레벨 1~5
    "value": 1, // 스킬의 성능 수치 1~7
    "time": 0 // 스킬이 게임에서 사용되는 시간
},
```



### - /data_generator_tools
##### 1. asset_list_generator
###### asset 정리 엑셀 파일에서 추출된 json 파일을 기반으로 cnd-asset nft의 데이터를 생성.



### - GCS

##### 이미지 퍼블릭 링크 샘플
##### https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/main-image/1120200001.png

###### https://storage.googleapis.com/clonecraft-asset/nft-images/cnd-asset/base-image/1120200001.png

