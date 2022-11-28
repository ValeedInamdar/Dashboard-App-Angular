package com.lti.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TRACKER")
public class Tracker {
	@Id
	private int applicationId;
	private String loanStatus;
	@OneToOne(targetEntity = Customer.class)
	private Customer customer;

	public Tracker(int applicationId, String loanStatus) {
		super();
		this.applicationId = applicationId;
		this.loanStatus = loanStatus;
	}

	public Tracker() {
		super();
	}

	public int getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(int applicationId) {
		this.applicationId = applicationId;
	}

	public String getLoanStatus() {
		return loanStatus;
	}

	public void setLoanStatus(String loanStatus) {
		this.loanStatus = loanStatus;
	}

	@Override
	public String toString() {
		return "Tracker [applicationId=" + applicationId + ", loanStatus=" + loanStatus + "]";
	}

}
