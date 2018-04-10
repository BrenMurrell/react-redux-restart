//extracted from ManageCoursePage to be able to test mapStateToProps - removes complexity from component

export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}