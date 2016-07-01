package com.ssa.hrdept;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.ssa.hrdept.dao.EmployeeManagementSvcDAO;
import com.ssa.hrdept.model.Employee;

@Path("EmployeeService")
public class EmployeeManagementService {

	private static EmployeeManagementSvcDAO doaObject = EmployeeManagementSvcDAO.getInstance();

	@GET
	@Path("employees")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Employee> getEmployees() {
		List<Employee> listEmployee = doaObject.getEmployees();
		return listEmployee;
	}

	@GET
	@Path("employee/{empid}")
	@Produces(MediaType.APPLICATION_JSON)
	public Employee getEmployee(@PathParam("empid") String empID) {
		System.out.println("Begining getEmployee");
		Employee employee = doaObject.getEmployee(empID);
		System.out.println("End getEmployee");
		return employee;
	}

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	@Path("ping")
	public String ping() {
		return "EmployeeService UP & Running!!";
	}

}
