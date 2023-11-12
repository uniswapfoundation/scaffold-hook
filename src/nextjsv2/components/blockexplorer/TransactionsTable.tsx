import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { formatEther } from "viem";
import { TransactionHash } from "~~/components/blockexplorer/TransactionHash";
import { Address } from "~~/components/scaffold-eth";
import { TransactionWithFunction, getTargetNetwork } from "~~/utils/scaffold-eth";
import { TransactionsTableProps } from "~~/utils/scaffold-eth/";

export const TransactionsTable = ({ blocks, transactionReceipts }: TransactionsTableProps) => {
  const targetNetwork = getTargetNetwork();

  return (
    <div className="flex justify-center px-4 md:px-0">
      <div className="overflow-x-auto w-full shadow-2xl rounded-xl">
        <Table className="table text-xl  table-zebra w-full md:table-md table-sm">
          <TableHeader>
            <TableColumn className="">Transaction Hash</TableColumn>
            <TableColumn className="">Function Called</TableColumn>
            <TableColumn className="">Block Number</TableColumn>
            <TableColumn className="">Time Mined</TableColumn>
            <TableColumn className="">From</TableColumn>
            <TableColumn className="">To</TableColumn>
            <TableColumn className=" text-end">Value ({targetNetwork.nativeCurrency.symbol})</TableColumn>
          </TableHeader>
          <TableBody>
            {blocks.map(block =>
              (block.transactions as TransactionWithFunction[]).map(tx => {
                const receipt = transactionReceipts[tx.hash];
                const timeMined = new Date(Number(block.timestamp) * 1000).toLocaleString();
                const functionCalled = tx.input.substring(0, 10);

                return (
                  <TableRow key={tx.hash} className="hover text-sm">
                    <TableCell className="w-1/12 md:py-4">
                      <TransactionHash hash={tx.hash} />
                    </TableCell>
                    <TableCell className="w-2/12 md:py-4">
                      {tx.functionName === "0x" ? "" : <span className="mr-1">{tx.functionName}</span>}
                      {functionCalled !== "0x" && (
                        <span className="badge badge-primary font-bold text-xs">{functionCalled}</span>
                      )}
                    </TableCell>
                    <TableCell className="w-1/12 md:py-4">{block.number?.toString()}</TableCell>
                    <TableCell className="w-2/1 md:py-4">{timeMined}</TableCell>
                    <TableCell className="w-2/12 md:py-4">
                      <Address address={tx.from} size="sm" />
                    </TableCell>
                    <TableCell className="w-2/12 md:py-4">
                      {!receipt?.contractAddress ? (
                        tx.to && <Address address={tx.to} size="sm" />
                      ) : (
                        <div className="relative">
                          <Address address={receipt.contractAddress} size="sm" />
                          <small className="absolute top-4 left-4">(Contract Creation)</small>
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-right md:py-4">
                      {formatEther(tx.value)} {targetNetwork.nativeCurrency.symbol}
                    </TableCell>
                  </TableRow>
                );
              }),
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
