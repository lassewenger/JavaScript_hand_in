
import React from "react"
import {Link} from "react-router"
import EditBook from './EditBook'
import {observer} from "mobx-react"

@observer
export default class Details extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const id = this.props.params.id;
    const store = this.props.route.bookStore;
    let book = store.getBook(id);
    return (
      <div>
        <h3 style={{color: "steelblue"}}>Detailed info for the title: {book.title}</h3>
        <h4> {book.info}</h4>
        <h4>{book.moreInfo}</h4>
        <EditBook book={book} bookStore={store} />
        <br />
        <Link to="/products">Products</Link>
      </div>
    );
  }
}