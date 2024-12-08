import EmployeeslistItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const Employeeslist = () => {
  return (
    <ul className="app-list list-group">
      <EmployeeslistItem />
      <EmployeeslistItem />
      <EmployeeslistItem />
    </ul>
  );
};

export default Employeeslist;
