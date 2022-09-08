import ReactPaginate from 'react-paginate';
import './Pagination.css';
import { BiChevronsRight, BiChevronsLeft } from 'react-icons/bi';

function PaginatedItems({ totalPages, setPage, currentPage }) {
  const handlePageClick = event => {
    setPage({ page: event.selected + 1 });
  };

  return (
    <>
      <ReactPaginate
        nextLabel={<BiChevronsRight size={18} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={totalPages}
        forcePage={currentPage}
        previousLabel={<BiChevronsLeft size={18} />}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
