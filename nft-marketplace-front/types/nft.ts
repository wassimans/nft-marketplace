export type Nft = {
    description: string,
    image: string,
    name: string,
    attributes: NftAttribute[]
}

type NftAttribute = {
    trait_type: string,
    value: string
}