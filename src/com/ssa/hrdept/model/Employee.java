package com.ssa.hrdept.model;

import java.io.Serializable;

public class Employee implements Serializable {

	private String ename;
	private String eid;
	private int esalary;

	public Employee(String ename, String eid, int esalary) {
		super();
		this.ename = ename;
		this.eid = eid;
		this.esalary = esalary;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getEid() {
		return eid;
	}

	public void setEid(String eid) {
		this.eid = eid;
	}

	public int getEsalary() {
		return esalary;
	}

	public void setEsalary(int esalary) {
		this.esalary = esalary;
	}

}
