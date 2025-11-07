"use client";
import { useEffect, useState } from "react";
import { getAbsClassification, ClassificationDTO,getR2Classification } from "@/api/rally/cprApi";
import TableAbsClassification from "../components/TableClassification";
import { Dropdown, DropdownItem } from "flowbite-react";

export default function UsersPage() {
  const [absolute, setAbsolute] = useState<ClassificationDTO[]>([]);
  const [r2, setR2] = useState<ClassificationDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAbsClassification().then((data) => {
      setAbsolute(data);
      setLoading(false);
    });
  }, []);

    useEffect(() => {
      getR2Classification().then((data) => {
        setR2(data);
      });
    }, []);
  
    const [selectedItem, setSelectedItem] = useState("CP2RM");
    const options = [
      { name: "Absolute", value: "cpr" },
      { name: "Rally2", value: "r2" },
    ];
    const [selectedValue, setSelectedValue] = useState("cpr");
  

  return (
    <>
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
      <p className="text-xl  mb-4 text-yellow-400">CPR Absolute Drivers</p>
            {selectedValue === "cpr" && <TableAbsClassification data={absolute} />}
            {selectedValue === "r2" && <TableAbsClassification data={r2} />}
    </>
  );
}
