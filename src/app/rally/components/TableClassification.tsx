"use client";
import { ClassificationDTO } from "@/api/rally/cprApi";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from "flowbite-react";
import { Key } from "react";

type StagePoints = {
  geral?: string;
  powerStage?: string;
};

export default function TableAbsClassification(data: { data: ClassificationDTO[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Position</TableHeadCell>
          <TableHeadCell>Number</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          {data.data[0]?.stagePoints?.map((_sp: StagePoints , index: number) => (
            <TableHeadCell key={index}>{index+1}</TableHeadCell>
          ))}
          <TableHeadCell>Total</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.data.map((u) => (
          <TableRow
            key={u.number}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {u.position}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {u.number}
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {u.name}
            </TableCell>
            {u.stagePoints?.map((sp: StagePoints, index: number) => (
              <TableCell
                key={index}
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
              >
                {sp.geral} {sp.powerStage !== "" ? `+ ${sp.powerStage}` : ""}
              </TableCell>
            ))}
            <TableCell>{u.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
