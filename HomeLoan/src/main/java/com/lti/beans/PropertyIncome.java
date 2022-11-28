package com.lti.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PROPERTYANDINCOME")
public class PropertyIncome {
	@Id
	private int pId;
	private String pLocation;
	private String pName;
	private double pEstAmt;
	private String empType;
	private int empRetirementAge;
	private String empOrgType;
	private String empEmployeerName;
	private double empIncome;
	@OneToOne(targetEntity = Customer.class)
	private Customer customer;

	public PropertyIncome(int pId, String pLocation, String pName, double pEstAmt, String empType, int empRetirementAge,
			String empOrgType, String empEmployeerName, double empIncome) {
		super();
		this.pId = pId;
		this.pLocation = pLocation;
		this.pName = pName;
		this.pEstAmt = pEstAmt;
		this.empType = empType;
		this.empRetirementAge = empRetirementAge;
		this.empOrgType = empOrgType;
		this.empEmployeerName = empEmployeerName;
		this.empIncome = empIncome;
	}

	public PropertyIncome() {
		super();
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public String getpLocation() {
		return pLocation;
	}

	public void setpLocation(String pLocation) {
		this.pLocation = pLocation;
	}

	public String getpName() {
		return pName;
	}

	public void setpName(String pName) {
		this.pName = pName;
	}

	public double getpEstAmt() {
		return pEstAmt;
	}

	public void setpEstAmt(double pEstAmt) {
		this.pEstAmt = pEstAmt;
	}

	public String getEmpType() {
		return empType;
	}

	public void setEmpType(String empType) {
		this.empType = empType;
	}

	public int getEmpRetirementAge() {
		return empRetirementAge;
	}

	public void setEmpRetirementAge(int empRetirementAge) {
		this.empRetirementAge = empRetirementAge;
	}

	public String getEmpOrgType() {
		return empOrgType;
	}

	public void setEmpOrgType(String empOrgType) {
		this.empOrgType = empOrgType;
	}

	public String getEmpEmployeerName() {
		return empEmployeerName;
	}

	public void setEmpEmployeerName(String empEmployeerName) {
		this.empEmployeerName = empEmployeerName;
	}

	public double getEmpIncome() {
		return empIncome;
	}

	public void setEmpIncome(double empIncome) {
		this.empIncome = empIncome;
	}

	@Override
	public String toString() {
		return "PropertyIncome [pId=" + pId + ", pLocation=" + pLocation + ", pName=" + pName + ", pEstAmt=" + pEstAmt
				+ ", empType=" + empType + ", empRetirementAge=" + empRetirementAge + ", empOrgType=" + empOrgType
				+ ", empEmployeerName=" + empEmployeerName + ", empIncome=" + empIncome + "]";
	}

}
