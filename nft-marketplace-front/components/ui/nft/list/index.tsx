import { Nft } from "@_types/nft";
import { FunctionComponent } from "react";
import NftItem from "@ui/nft/item";

type NftListProps = {
  nfts: Nft[];
};

const NftList: FunctionComponent<NftListProps> = ({ nfts }) => {
  return (
    <>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {nfts.map((nft) => (
          <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            key={nft.image}
          >
            <NftItem nft={nft} />
          </div>
        ))}
      </div>
    </>
  );
};

export default NftList;
