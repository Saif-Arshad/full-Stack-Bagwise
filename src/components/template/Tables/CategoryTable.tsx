"use client"

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

const CategoryTable = ({categories}:any) => {
    const columns = [
        { name: "Name", uid: "name" },
        { name: "Actions", uid: "actions" },
      ];
  const renderCell = React.useCallback((category:any, columnKey:any) => {
    const cellValue = category[columnKey];

    switch (columnKey) {
      case "name":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaRegEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit category">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <MdEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete category">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdDelete />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Category table with CRUD operations">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={categories}>
        {(item:any) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
