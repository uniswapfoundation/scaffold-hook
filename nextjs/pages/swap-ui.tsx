import { useMemo } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import LiquidityUI from "~~/components/swap-ui/LiquidityUI";
import PoolInit from "~~/components/swap-ui/PoolInit";
import SwapUI from "~~/components/swap-ui/swapUI";

const SwapUIPage: NextPage = () => {
  const router = useRouter();
  console.log(router, "router");
  const { query } = router;
  const isSwap = useMemo(() => query.page === "swap", [query.page]);
  const isLiquidity = useMemo(() => query.page === "liquidity", [query.page]);
  const isInitialize = useMemo(() => query.page === "initialize", [query.page]);

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

export default SwapUIPage;
