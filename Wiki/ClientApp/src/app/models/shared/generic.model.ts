export class PagedList<T> {
    rowsCount: number;
    data: T[];
}

export class ListRequest {
    searchTerm = '';
    sortData = '';
    pageNumber = 1;
    pageSize = 10;

    constructor(pageNumber = 1, pageSize = 10, sortData = '', searchTerm = '') {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.sortData = sortData || '';
        this.searchTerm = searchTerm || '';
    }
}
