import React, { useState } from "react";
import data from "../static/tableData.json";
import clsx from "clsx";
import TablePagination from "./TablePagination";
import TableHeader from "./TableHeader";

const WorkspaceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("All");


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredData = data.filter((item) => {
    if (
      search !== "" &&
      !item.customer_name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    ) {
      return false;
    }
    if (sort !== "All" && item.status !== sort) {
      return false;
    }
    return true;
  });

  const pageSize = 6;
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const nextPageHandler = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white py-6 px-6 rounded-2xl shadow-xl">
      <TableHeader
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        handleSearchChange={handleSearchChange}
      />
      <table className="w-full">
        <thead className="border-b">
          {headerColumns.map((header) => (
            <th key={header.value} className="text-gray-500 py-4 text-left">
              {header.label}
            </th>
          ))}
        </thead>
        <tbody>
          {paginatedData.map((tableRow, index) => (
            <tr className={clsx("border-b font-semibold")}>
              {headerColumns.map((header) =>
                header.value === "status" ? (
                  <td key={header.value} className="text-left py-4">
                    <button
                      className={clsx(
                        tableRow.status === "Active"
                          ? "bg-[#a6e7d8] text-[#15b791] w-[100px] border-[#15b791] border py-1 rounded-lg"
                          : "bg-[#ffc5c5] text-[#ec5555] w-[100px] border-[#ec5555] border py-1 rounded-lg"
                      )}
                    >
                      {tableRow.status}
                    </button>
                  </td>
                ) : (
                  <td key={header.value} className="text-left py-4">
                    {tableRow[header.value]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        dataLength={totalItems}
        nextPageHandler={nextPageHandler}
        previousPageHandler={previousPageHandler}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

const headerColumns = [
  { label: "Customer Name", value: "customer_name" },
  { label: "Company", value: "company" },
  { label: "Phone Number", value: "phone_number" },
  { label: "Email", value: "email" },
  { label: "Country", value: "country" },
  { label: "Status", value: "status" },
];

export default WorkspaceTable;
