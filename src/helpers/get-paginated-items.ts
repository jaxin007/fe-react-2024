export const getPaginatedItems = <T>(items: T[], page: number, itemsPerPage: number): T[] =>
    items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
