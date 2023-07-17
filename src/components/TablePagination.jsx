import clsx from "clsx";
import React from "react";
import { ReactComponent as Next } from "../static/svg/next.svg";
import { ReactComponent as Previous } from "../static/svg/previous.svg";

const TablePagination = ({
  dataLength,
  nextPageHandler,
  previousPageHandler,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const lastPage = Math.ceil(dataLength / 6);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between space-x-2">
        <div className="">
          <p className="text-sm text-gray-700">
            Showing 1 to 6 of {lastPage} results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <PreviousButton
              previousPageHandler={previousPageHandler}
              setCurrentPage={setCurrentPage}
            />
            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
            {/* <Button
              number={1}
              active={currentPage === 1}
              setCurrentPage={setCurrentPage}
            /> */}
            {/* {currentPage < 5 ? (
              <>
                <Button
                  number={2}
                  active={currentPage === 2}
                  setCurrentPage={setCurrentPage}
                />
                <Button
                  number={3}
                  active={currentPage === 3}
                  setCurrentPage={setCurrentPage}
                />
                {currentPage > 3 && (
                  <Button number={currentPage} active={true} />
                )}
                <DottedButton />
              </>
            ) : (
              <>
                <DottedButton />
                {currentPage === 5 && (
                  <Button
                    number={currentPage}
                    active={true}
                    setCurrentPage={setCurrentPage}
                  />
                )}
                <Button
                  number={lastPage - 2}
                  active={currentPage === lastPage - 2}
                  setCurrentPage={setCurrentPage}
                />
                <Button
                  number={lastPage - 1}
                  active={currentPage === lastPage - 1}
                  setCurrentPage={setCurrentPage}
                />
              </>
            )} */}
            {Array(totalPages)
              .fill(1)
              .map((item, index) => {
                return (
                  <Button
                    number={index + 1}
                    active={currentPage === index + 1}
                    setCurrentPage={setCurrentPage}
                  />
                );
              })}
            {/* <Button
              number={lastPage}
              active={currentPage === lastPage}
              setCurrentPage={setCurrentPage}
            /> */}
            <NextButton
              nextPageHandler={nextPageHandler}
              setCurrentPage={setCurrentPage}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

const Button = ({ number, active, setCurrentPage }) => {
  return (
    <button
      className={clsx(
        "relative hidden items-center px-4 py-2 text-sm font-semibold  focus:z-20 focus:outline-offset-0 md:inline-flex",
        active
          ? " bg-indigo-600 text-white focus-visible:outline-indigo-600"
          : "text-gray-900 hover:bg-gray-50 ring-gray-300 ring-1 ring-inset "
      )}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </button>
  );
};

const DottedButton = () => {
  return (
    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
      ...
    </span>
  );
};

const PreviousButton = ({ previousPageHandler }) => {
  return (
    <button
      onClick={() => previousPageHandler()}
      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">Previous</span>
      <Previous />
    </button>
  );
};
const NextButton = ({ nextPageHandler }) => {
  return (
    <button
      onClick={() => nextPageHandler()}
      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
    >
      <span className="sr-only">Next</span>
      <Next />
    </button>
  );
};

export default TablePagination;
