import React, { Component } from 'react';

class MusiciansPresenter extends Component {
    constructor(props) {
        super(props);

     this.state = { 
         musicians: this.props.data,
        filterVal: -2
     };
    }

    onFilterChange = (evt) => {
        this.setState({filterVal: evt.target.value});
    }

    render() {
        const rows = this.state.musicians.filter(m => 
            m.stars > this.state.filterVal).map((m) =>
            <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.stars}</td>
            </tr>
        );
        return (
            <div>
                <h3>Musicians</h3>
                Show musician with stars above: <input onChange={this.onFilterChange} /><br/>
                <table>
                  <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Stars</th>
                    </tr>
                  </thead>
                    <tbody>
                     {rows}
                    </tbody>
                </table>
            </div>
        );
    }    
} 

export default MusiciansPresenter;