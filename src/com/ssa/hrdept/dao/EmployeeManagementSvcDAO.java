package com.ssa.hrdept.dao;

import java.util.ArrayList;
import java.util.List;

import com.ssa.hrdept.model.Employee;

public class EmployeeManagementSvcDAO {

	private static EmployeeManagementSvcDAO daoObject = null;

	private EmployeeManagementSvcDAO() {
	}

	public static EmployeeManagementSvcDAO getInstance() {
		return daoObject = new EmployeeManagementSvcDAO();
	}

	public List<Employee> getEmployees() {

		Employee employee1 = new Employee("E1", "E1000", 10000);
		Employee employee2 = new Employee("E2", "E2000", 20000);
		Employee employee3 = new Employee("E3", "E3000", 30000);

		List<Employee> employees = new ArrayList<Employee>();
		employees.add(employee1);
		employees.add(employee2);
		employees.add(employee3);

		return employees;
	}

	public Employee getEmployee(String empID) {
		Employee employee1 = new Employee("E1", "E1000", 10000);
		return employee1;
	}

}
