package com.ssa.hrdept.model;

public class BusinessUnit {

	private String buName = null;

	private String buID = null;

	public BusinessUnit(String buName, String buID) {
		super();
		this.buName = buName;
		this.buID = buID;
	}

	public String getBuName() {
		return buName;
	}

	public void setBuName(String buName) {
		this.buName = buName;
	}

	public String getBuID() {
		return buID;
	}

	public void setBuID(String buID) {
		this.buID = buID;
	}


}
