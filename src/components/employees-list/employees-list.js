import EmployeeslistItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const Employeeslist = ({ data, onDelete, onToggleProp, onChangeSalary }) => {
  const elements = data.map((item) => {
    const { id } = item;
    return (
      <EmployeeslistItem
        key={id}
        {...item}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
        onChangeSalary={onChangeSalary}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default Employeeslist;
