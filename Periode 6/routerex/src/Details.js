import React from 'react';
import {Link} from "react-router";

class Details extends React.Component {
  render() {
    let id = this.props.params.id;
    let book = this.props.route.books.filter((book) => {
      return book.id === Number(id);
    })[0];
    return (
      <div>
        <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
        <h4> {book.info}</h4>
        <h4>{book.moreInfo}</h4>
        <br />
        <Link to="/products">Products</Link>
      </div>
    );
  }
}

export default Details;