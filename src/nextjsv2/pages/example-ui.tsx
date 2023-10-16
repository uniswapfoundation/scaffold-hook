import { useRouter } from "next/router";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import SwapUI from "~~/components/example-ui/swapUI";

// const SwapUI = () => {
//   return (
//     <>
//       <MetaHeader title="Swap UI | Uniswap Project" description="Swap and manage your tokens seamlessly.">
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
//       </MetaHeader>
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="card shadow-2xl p-6 bg-white rounded-xl border-2 border-pink-400  max-w-xl transition-shadow hover:shadow-none">
//           <div className="space-y-6">
//             <div className="tabs tabs-boxed">
//               <div className="tab">Swap</div>
//               <div className="tab">Liquidity</div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex flex-col justify-end">
//                 <label className="label text-left block">
//                   <span className="label-text">From:</span>
//                 </label>
//                 <select className="select select-bordered w-full mt-2">
//                   <option>ETH</option>
//                   <option>DAI</option>
//                 </select>
//               </div>
//               <div className="flex flex-col justify-end">
//                 <input type="number" className="input input-bordered w-full mt-6" placeholder="Amount" />
//               </div>
//               <div className="flex flex-col justify-end">
//                 <label className="label text-left block">
//                   <span className="label-text">To:</span>
//                 </label>
//                 <select className="select select-bordered w-full mt-2">
//                   <option>DAI</option>
//                   <option>ETH</option>
//                 </select>
//               </div>
//               <div className="flex flex-col justify-end">
//                 <input type="number" className="input input-bordered w-full mt-6" placeholder="Amount" disabled />
//               </div>
//             </div>

//             <button className="btn btn-primary w-full hover:bg-indigo-600 hover:shadow-lg active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all mt-4">
//               Swap
//             </button>

//             <div className="border-t-2 border-gray-200 pt-4 mt-4">
//               <div className="grid grid-rows-3 gap-4 text-sm">
//                 <div className="flex items-center justify-between">
//                   <span>Liquidity Available:</span>
//                   <span className="font-bold ml-2">1000 ETH</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span>Fee:</span>
//                   <span className="font-bold ml-2">0.3%</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span>Slippage:</span>
//                   <span className="font-bold ml-2">0.2%</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex space-x-4 mt-4">
//               <button className="btn btn-outline w-1/2 hover:bg-indigo-100 hover:shadow-md transition-all">
//                 Add Liquidity
//               </button>
//               <button className="btn btn-outline w-1/2 hover:bg-indigo-100 hover:shadow-md transition-all">
//                 Remove Liquidity
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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
