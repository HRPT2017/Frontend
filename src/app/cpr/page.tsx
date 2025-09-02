"use client";
import { useEffect, useState } from "react";
import { getUsers, CprDTO } from "@/api/cprApi";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell
} from "flowbite-react";

export default function UsersPage() {
  const [users, setUsers] = useState<CprDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <p className="text-xl  mb-4 text-yellow-400">CPR Absolute Drivers</p>
      <Table>
        <TableHead>
          <TableHeadCell>Position</TableHeadCell>
          <TableHeadCell>Number</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          {users[0]?.stagePoints?.map((sp) =>
            <TableHeadCell>{sp.stage}</TableHeadCell>
          )}
          <TableHeadCell>Total</TableHeadCell>
        </TableHead>
        <TableBody>
          {users.map((u) => (
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
              {u.stagePoints?.map((sp) =>
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {sp.geral} {sp.powerStage !== "" ? `+ ${sp.powerStage}` : ''}
              </TableCell>)}
              <TableCell>
                {u.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
