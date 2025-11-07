"use client";
import { useEffect, useState } from "react";
import { getUsers, ClassificationDTO } from "@/api/rally/cpmrApi";
import TableAbsClassification from "../components/TableClassification";


export default function UsersPage() {
  const [users, setUsers] = useState<ClassificationDTO[]>([]);
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
      {loading ? <p>Loading...</p> : <TableAbsClassification data={users} />}
    </>
  );
}
