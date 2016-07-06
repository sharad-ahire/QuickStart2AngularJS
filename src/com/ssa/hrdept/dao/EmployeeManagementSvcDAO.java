package com.ssa.hrdept.dao;

import java.util.ArrayList;
import java.util.List;

import com.ssa.hrdept.model.BusinessUnit;
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
		Employee employee4 = new Employee("E4", "E4000", 30000);
		Employee employee5 = new Employee("E5", "E5000", 30000);
		Employee employee6 = new Employee("E6", "E6000", 30000);

		List<Employee> employees = new ArrayList<Employee>();
		employees.add(employee1);
		employees.add(employee2);
		employees.add(employee3);
		employees.add(employee4);
		employees.add(employee5);
		employees.add(employee6);

		return employees;
	}

	public Employee getEmployee(String empID) {
		Employee employee1 = new Employee("E1", "E1000", 10000);
		return employee1;
	}

	public List<BusinessUnit> getAllBUs() {
		BusinessUnit bu1 = new BusinessUnit("Cloud Services", "BU-100");
		BusinessUnit bu2 = new BusinessUnit("Database Services", "BU-200");
		BusinessUnit bu3 = new BusinessUnit("BigData Services", "BU-300");
		BusinessUnit bu4 = new BusinessUnit("Hosting Services", "BU-400");

		List<BusinessUnit> BUs = new ArrayList<BusinessUnit>();
		BUs.add(bu1);
		BUs.add(bu2);
		BUs.add(bu3);
		BUs.add(bu4);

		return BUs;
	}

}
