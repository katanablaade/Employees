import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'John C.',
          salary: 800,
          increase: false,
          rise: false,
          id: uuidv4(),
        },
        {
          name: 'Alex M.',
          salary: 3000,
          increase: false,
          rise: false,
          id: uuidv4(),
        },
        {
          name: 'Carl W.',
          salary: 5000,
          increase: false,
          rise: false,
          id: uuidv4(),
        },
      ],
    };
  }

  deleteItem = (id) => {
    // const index = data.findIndex((elem) => elem.id === id);
    // const before = data.slice(0, index);
    // const after = data.slice(index + 1);
    // const newArr = [...before, ...after];
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);

    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArr = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return {
    //     data: newArr,
    //   };
    // });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: +salary,
      increase: false,
      rise: false,
      id: uuidv4(),
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <Employeeslist
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
