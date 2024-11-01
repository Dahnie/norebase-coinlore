import styles from "./Pagination.module.css";
import arrowLeftIcon from "../../assets/svg/arrow-left.svg";
import arrowRightIcon from "../../assets/svg/arrow-right.svg";
import { usePagination } from "../../hooks/usePaginate";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  rowsPerPage: number;
  siblingCount?: number;
  onPageChange: (start: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = function ({
  currentPage,
  totalCount,
  rowsPerPage,
  siblingCount = 1,
  onPageChange,
  className = "",
}) {
  // Functions, States and Variables
  // Get Pagination Range Array from usePagination Hook
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    rowsPerPage,
  }) as ("DOTS" | number)[];

  // Last Page on the Pagination Range
  const lastPage = paginationRange[paginationRange.length - 1];

  // Functions
  // Handle On Click of Next Button on Pagination
  const handleOnNextClick = () => {
    onPageChange(currentPage + 1);
  };

  // Handle On Click of Previous Button on Pagination
  const handleOnPreviousClick = () => {
    onPageChange(currentPage - 1);
  };

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={`${styles.pagination_container} ${className}`}>
      <nav>
        {/* Previous Buttons */}
        <div className={styles.prev_button_wrapper}>
          {currentPage > 1 && (
            <button
              onClick={handleOnPreviousClick}
              disabled={currentPage === 1}
            >
              <img src={arrowLeftIcon} alt="arrow left" />
              Previous
            </button>
          )}
        </div>

        {/* Next Button */}
        <div className={styles.next_button_wrapper}>
          <button
            disabled={currentPage === lastPage}
            onClick={handleOnNextClick}
          >
            Next
            <img src={arrowRightIcon} alt="arrow right" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
