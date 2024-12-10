import EmployeeslistItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const Employeeslist = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeeslistItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default Employeeslist;
