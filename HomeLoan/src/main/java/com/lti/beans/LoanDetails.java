package com.lti.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "LOANDETAILS")
public class LoanDetails {
	@Id
	private int loanId;
	private long maxLoanAmt;
	private double intrestRate;
	private double tenure;
	private long loanAmt;

	@OneToOne(targetEntity = Customer.class)
	private Customer customer;

	public LoanDetails() {
		super();
	}

	public LoanDetails(int loanId, long maxLoanAmt, double intrestRate, double tenure, long loanAmt) {
		super();
		this.loanId = loanId;
		this.maxLoanAmt = maxLoanAmt;
		this.intrestRate = intrestRate;
		this.tenure = tenure;
		this.loanAmt = loanAmt;
	}

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	public long getMaxLoanAmt() {
		return maxLoanAmt;
	}

	public void setMaxLoanAmt(long maxLoanAmt) {
		this.maxLoanAmt = maxLoanAmt;
	}

	public double getIntrestRate() {
		return intrestRate;
	}

	public void setIntrestRate(double intrestRate) {
		this.intrestRate = intrestRate;
	}

	public double getTenure() {
		return tenure;
	}

	public void setTenure(double tenure) {
		this.tenure = tenure;
	}

	public long getLoanAmt() {
		return loanAmt;
	}

	public void setLoanAmt(long loanAmt) {
		this.loanAmt = loanAmt;
	}

	@Override
	public String toString() {
		return "LoanDetails [loanId=" + loanId + ", maxLoanAmt=" + maxLoanAmt + ", intrestRate=" + intrestRate
				+ ", tenure=" + tenure + ", loanAmt=" + loanAmt + "]";
	}

}
