"use client";
import { useEffect, useState } from "react";
import {
  ClassificationDTO,
  getCP2RMAbsDriversClassification,
  getRC4Classification,
} from "@/api/rally/cp2rmApi";
import TableAbsClassification from "../components/TableClassification";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function UsersPage() {
  const [cp2rm, setCp2mr] = useState<ClassificationDTO[]>([]);
  const [rc4, setRC4] = useState<ClassificationDTO[]>([]);

  useEffect(() => {
    getCP2RMAbsDriversClassification().then((data) => {
      setCp2mr(data);
    });
  }, []);

  useEffect(() => {
    getRC4Classification().then((data) => {
      setRC4(data);
    });
  }, []);

  const [selectedItem, setSelectedItem] = useState("CP2RM");
  const options = [
    { name: "CP2RM", value: "cp2rm" },
    { name: "RC4", value: "rc4" },
  ];
  const [selectedValue, setSelectedValue] = useState("cp2rm");

  return (
    <>
      <p className="text-xl  mb-4 text-yellow-400">CPR Absolute Drivers</p>
      <div>
        <Dropdown label={selectedItem} inline={true} arrowIcon={true}>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => {
                setSelectedItem(option.name);
                setSelectedValue(option.value);
              }}
              className={
                selectedValue === option.value ? "bg-blue-500 text-white" : ""
              }
            >
              {option.name}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
      {selectedValue === "cp2rm" && <TableAbsClassification data={cp2rm} />}
      {selectedValue === "rc4" && <TableAbsClassification data={rc4} />}
    </>
  );
}
