import React from "react";
import { Row, Col } from "e-ui-react";

const Pagination = ({
    totalCount = 0,
    pageSize = 10,
    currentPage = 1,
    onPageChange,
    visiblePages = 5
}) => {

    const totalPages = Math.ceil(totalCount / pageSize);

    const startItem =
        totalCount === 0
            ? 0
            : ((currentPage - 1) * pageSize) + 1;

    const endItem = Math.min(
        currentPage * pageSize,
        totalCount
    );

    /**
     * Generate Pagination Numbers
     *
     * Examples:
     *
     * Page 1:
     * 1 2 3 4 5 ... 100
     *
     * Page 50:
     * 1 ... 48 49 50 51 52 ... 100
     *
     * Page 100:
     * 1 ... 96 97 98 99 100
     */
    /*
    const getPagesList = () => {

        const pages = [];

        if (totalPages <= visiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        const half = Math.floor(visiblePages / 2);

        let start = currentPage - half;
        let end = currentPage + half;

        // Beginning pages
        if (start <= 2) {
            start = 2;
            end = start + visiblePages - 1;
        }

        // Ending pages
        if (end >= totalPages - 1) {
            end = totalPages - 1;
            start = end - visiblePages + 1;
        }

        pages.push(1);

        if (start > 2) {
            pages.push("...");
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) {
            pages.push("...");
        }

        pages.push(totalPages);

        console.log("pages:", pages);
        return pages;
    };
    */
    /**
     * Generate Pagination Numbers Safely
     */
    const getPagesList = () => {
        const pages = [];

        // If total pages are small, just show all pages without ellipsis
        if (totalPages <= visiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        const half = Math.floor(visiblePages / 2);
        let start = currentPage - half;
        let end = currentPage + half;

        // Adjust window if pushing past the beginning
        if (start <= 2) {
            start = 2;
            end = start + visiblePages - 1;
        }

        // Adjust window if pushing past the ending
        if (end >= totalPages - 1) {
            end = totalPages - 1;
            start = end - visiblePages + 1;
        }

        // 1. Always push the first page
        pages.push(1);

        // 2. Add left ellipsis if there's a gap
        if (start > 2) {
            pages.push("...");
        }

        // 3. Add middle pages safely (guaranteed not to include 1 or totalPages)
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        // 4. Add right ellipsis if there's a gap
        if (end < totalPages - 1) {
            pages.push("...");
        }

        // 5. Always push the last page
        pages.push(totalPages);

        return pages;
    };
    
    const pages = getPagesList();

    const handlePageChange = (page) => {
        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        if (onPageChange) {
            onPageChange(page);
        }
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <Row>
            <Col md={6}>
                <div
                    style={{
                        marginTop: "28px",
                        color: "#6c757d"
                    }}
                >
                    <b>
                        Showing {startItem} to {endItem} of {totalCount} records
                    </b>
                </div>
            </Col>

            <Col md={6}>
                <div className="mtop15p pull-right">

                    <nav>
                        <ul className="pagination">

                            {/* First */}
                            <li
                                className={`page-item ${
                                    currentPage === 1
                                        ? "disabled"
                                        : ""
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        handlePageChange(1)
                                    }
                                >
                                    First
                                </button>
                            </li>

                            {/* Previous */}
                            <li
                                className={`page-item ${
                                    currentPage === 1
                                        ? "disabled"
                                        : ""
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        handlePageChange(
                                            currentPage - 1
                                        )
                                    }
                                >
                                    Previous
                                </button>
                            </li>

                            {/* Page Numbers */}
                            {pages.map((page, index) => {

                                if (page === "...") {
                                    return (
                                        <li
                                            key={`ellipsis-${index}`} // Unique key string
                                            className="page-item disabled"
                                        >
                                            <span className="page-link">
                                                ...
                                            </span>
                                        </li>
                                    );
                                }

                                return (
                                    <li
                                        key={`page-${page}`} // Unique key string
                                        className={`page-item ${
                                            currentPage === page
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                handlePageChange(page)
                                            }
                                        >
                                            {page}
                                        </button>
                                    </li>
                                );
                            })}

                            {/* Next */}
                            <li
                                className={`page-item ${
                                    currentPage === totalPages
                                        ? "disabled"
                                        : ""
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        handlePageChange(
                                            currentPage + 1
                                        )
                                    }
                                >
                                    Next
                                </button>
                            </li>

                            {/* Last */}
                            <li
                                className={`page-item ${
                                    currentPage === totalPages
                                        ? "disabled"
                                        : ""
                                }`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() =>
                                        handlePageChange(
                                            totalPages
                                        )
                                    }
                                >
                                    Last
                                </button>
                            </li>

                        </ul>
                    </nav>

                </div>
            </Col>
        </Row>
    );
};

export default Pagination;