export function selectBook(book) {
    // Select book is an ActionCreator, it needs to return an action,
    // an object with type propery.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
