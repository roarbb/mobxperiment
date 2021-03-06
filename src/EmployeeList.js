import React from 'react';
import { inject } from 'mobx-react';
import { Button } from "antd";

const EmployeeList = props => {
  if (props.employees === undefined || props.employees.length === 0) {
    return <div>Empty</div>
  }

  const list = props.employees.map((employee, index) => {
    return <div key={`emp-${index}`}>
      <b>{employee.name}</b> - desk <b>#{employee.deskId} ({props.deskFloor[employee.deskId]} floor)</b>
    </div>
  });

  return <div>
    {list}
    <Button type="primary" shape="circle" icon="plus" onClick={props.add} />
  </div>
};

export default inject(stores => ({
  employees: stores.rootStore.employeeStore.employees,
  deskFloor: stores.rootStore.employeeStore.deskFloor,
  add: stores.rootStore.employeeStore.add,
}))(EmployeeList);