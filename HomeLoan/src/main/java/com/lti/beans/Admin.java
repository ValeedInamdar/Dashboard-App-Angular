package com.lti.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ADMIN")
public class Admin {
	@Id
	private int adminId;
	private String adminUsername;
	private String adminName;
	
	public Admin() {
		super();
	}

	public Admin(int adminId, String adminUsername, String adminName) {
		super();
		this.adminId = adminId;
		this.adminUsername = adminUsername;
		this.adminName = adminName;
	}

	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getAdminUsername() {
		return adminUsername;
	}

	public void setAdminUsername(String adminUsername) {
		this.adminUsername = adminUsername;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	@Override
	public String toString() {
		return "Admins [adminId=" + adminId + ", adminUsername=" + adminUsername + ", adminName=" + adminName + "]";
	}

}
