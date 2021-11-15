import React from 'react';
//import ReactDOM from 'react-dom';
import './table.css';

const TableHeader = ()=>{
    return(
        <thead className="theader">
            <td>First Name</td>
            <td>Last Name</td>
        </thead>
    );
}

const TableBody = ()=>{
    return(
        <tbody className ="tbody">
            <tr>
            <td>Vaishak</td> <td>Rocky</td>
            </tr>
            <tr>
            <td>Jhanvi </td> <td>Kapoor</td>
            </tr><tr>
            <td>Athul</td> <td>Ram</td>
            </tr>
        </tbody>
    )
}

class Table extends React.Component {
    render() {
      return (
        <div >
            <table className="table">
                <TableHeader/>
                <TableBody/>
            </table>
        </div>
      );
    }
  }

  export default Table;