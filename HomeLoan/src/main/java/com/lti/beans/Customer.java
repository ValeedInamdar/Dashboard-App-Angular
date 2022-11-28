package com.lti.beans;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMER")
public class Customer {
	@Id
	private int custId;
	private String custFirstName;
	private String custLastName;
	private String custEmail;
	private String custUserName;
	private String custPassword;
	private String custPhoneNo;
	private String custDOB;
	private String custGender;
	private String custNationality;
	private String custAadharNo;
	private String custPanNo;
	@OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
	private PropertyIncome propertyAndIncome;
	@OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
	private LoanDetails loan;
	@OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
	private Tracker tracker;

	public Customer() {
		super();
	}

	public Customer(int custId, String custFirstName, String custLastName, String custEmail, String custUserName,
			String custPassword, String custPhoneNo, String custDOB, String custGender, String custNationality,
			String custAadharNo, String custPanNo) {
		super();
		this.custId = custId;
		this.custFirstName = custFirstName;
		this.custLastName = custLastName;
		this.custEmail = custEmail;
		this.custUserName = custUserName;
		this.custPassword = custPassword;
		this.custPhoneNo = custPhoneNo;
		this.custDOB = custDOB;
		this.custGender = custGender;
		this.custNationality = custNationality;
		this.custAadharNo = custAadharNo;
		this.custPanNo = custPanNo;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getCustFirstName() {
		return custFirstName;
	}

	public void setCustFirstName(String custFirstName) {
		this.custFirstName = custFirstName;
	}

	public String getCustLastName() {
		return custLastName;
	}

	public void setCustLastName(String custLastName) {
		this.custLastName = custLastName;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public String getCustUserName() {
		return custUserName;
	}

	public void setCustUserName(String custUserName) {
		this.custUserName = custUserName;
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String custPassword) {
		this.custPassword = custPassword;
	}

	public String getCustPhoneNo() {
		return custPhoneNo;
	}

	public void setCustPhoneNo(String custPhoneNo) {
		this.custPhoneNo = custPhoneNo;
	}

	public String getCustDOB() {
		return custDOB;
	}

	public void setCustDOB(String custDOB) {
		this.custDOB = custDOB;
	}

	public String getCustGender() {
		return custGender;
	}

	public void setCustGender(String custGender) {
		this.custGender = custGender;
	}

	public String getCustNationality() {
		return custNationality;
	}

	public void setCustNationality(String custNationality) {
		this.custNationality = custNationality;
	}

	public String getCustAadharNo() {
		return custAadharNo;
	}

	public void setCustAadharNo(String custAadharNo) {
		this.custAadharNo = custAadharNo;
	}

	public String getCustPanNo() {
		return custPanNo;
	}

	public void setCustPanNo(String custPanNo) {
		this.custPanNo = custPanNo;
	}

	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", custFirstName=" + custFirstName + ", custLastName=" + custLastName
				+ ", custEmail=" + custEmail + ", custUserName=" + custUserName + ", custPassword=" + custPassword
				+ ", custPhoneNo=" + custPhoneNo + ", custDOB=" + custDOB + ", custGender=" + custGender
				+ ", custNationality=" + custNationality + ", custAadharNo=" + custAadharNo + ", custPanNo=" + custPanNo
				+ "]";
	}

}
