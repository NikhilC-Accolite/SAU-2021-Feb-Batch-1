import java.io.*;
public class Serialization {
	public static void main(String args[]) {

		try {
			Car unserializedObject = new Car("Renault Kiger","RXE",5,21.5,750000.0);
			System.out.println("Before Serialization");
			System.out.println("unserializedObject: " + unserializedObject);
			FileOutputStream fos = new FileOutputStream("Car_serial");
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			oos.writeObject(unserializedObject);
			oos.flush();
			oos.close();
		}
		catch(IOException e) {
			System.out.println("Exception during serialization: " + e);
			System.exit(0);
		}

		try {
			Car deserializedObject;
			FileInputStream fis = new FileInputStream("Car_serial");
			ObjectInputStream ois = new ObjectInputStream(fis);
			deserializedObject = (Car)ois.readObject();
			ois.close();
			System.out.println("\nAfter Serialization transient feilds take defualt values");
			System.out.println("deserializedObject: " + deserializedObject);
		}
		catch(Exception e) {
			System.out.println("Exception during deserialization: " + e);
			System.exit(0);
		}
	}
}

class Car implements Serializable { String name; String model; int gears;
transient double mileage; transient double cost;

	public Car(String name, String model, int gears, double mileage, double cost) {
		this.name = name;
		this.model = model;
		this.gears = gears;
		this.mileage = mileage;
		this.cost = cost;
	}

	public String toString() { return "The Car's name is " + name + ", model is "
+ model + ", has " + gears + " gears, gives "+ mileage + "KM of mileage, and costs Rs."+cost; 
	} 
}