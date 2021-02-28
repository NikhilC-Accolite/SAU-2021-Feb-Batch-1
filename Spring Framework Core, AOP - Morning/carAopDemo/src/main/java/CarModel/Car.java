package CarModel;

public class Car {
	private String companyName;

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
		System.out.println("After setting name to Car object");
	} 
}
