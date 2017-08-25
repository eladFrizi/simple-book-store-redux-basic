import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                >{book.title}</li>
            )
        })
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned from here will show up as props
    //inside of booklist
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result
    // should pass to all the reducers.
    return bindActionCreators({ selectBook }, dispatch)
}

// promote BookList from a component to a container - it needs
//to know about this new dispatch method, make it available
// as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);