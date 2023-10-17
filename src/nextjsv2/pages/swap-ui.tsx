import { useRouter } from "next/router";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import SwapUI from "~~/components/swap-ui/SwapUI";

const SwapUIPage: NextPage = () => {
  const router = useRouter();
  console.log(router, "router");
  const isSwap = router.query.page === "swap";
  const isLiquidity = router.query.page === "liquidity";

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else if (router.isReady && isSwap) {
    return <SwapUI />;
  } else if (router.isReady && isLiquidity) {
    return <SwapUI />;
  }

  return <></>;
};

export default SwapUIPage as ExampleUI;
