import { useRouter } from "next/router";
import type { NextPage } from "next";
import SwapUI from "~~/components/swap-ui/SwapUI";
import PoolInit from "~~/components/swap-ui/PoolInit";
import LiquidityUI from "~~/components/swap-ui/LiquidityUI";

const SwapUIPage: NextPage = () => {
  const router = useRouter();
  console.log(router, "router");
  const isSwap = router.query.page === "swap";
  const isLiquidity = router.query.page === "liquidity";
  const isInitialize = router.query.page === "initialize";

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else if (router.isReady && isSwap) {
    return <SwapUI />;
  } else if (router.isReady && isLiquidity) {
    return <LiquidityUI />;
  } else if (router.isReady && isInitialize) {
    return <PoolInit />;
  }

  return <></>;
};

export default SwapUIPage as ExampleUI;
