//add reusable interface/types here to export
type Card = {
    associatedCards: [],
    associatedCardRefs: [],
    assets: [
      {
        gameAbsolutePath: string,
        fullAbsolutePath: string
      }
    ],
    region: string,
    regionRef: string,
    attack: number,
    cost: number,
    health: number,
    description: string,
    descriptionRaw: string,
    levelupDescription: string,
    levelupDescriptionRaw: string,
    flavorText: string,
    artistName: string,
    name: string,
    cardCode: string,
    keywords: [],
    keywordRefs: [],
    spellSpeed: string,
    spellSpeedRef: string,
    rarity: string,
    rarityRef: string,
    subtype: string,
    subtypes: [],
    supertype: string,
    type: string,
    collectible: boolean
  }

type CardInfo = {
    name: string
    fullImg: string,
    artist: string,
    flavour: string,
    cost: number,
    attack: number,
    health: number,
    type: string,
    rarity: string
}

// enum Rarity {
//     Common = "Common",
//     Rare = "Rare",
//     Epic = "Epic",
//     Champion = "Champion"
// }

// enum Type {
//     Spell = "Spell",
//     Follower = "Follower",
//     Champion = "Champion"
// }
