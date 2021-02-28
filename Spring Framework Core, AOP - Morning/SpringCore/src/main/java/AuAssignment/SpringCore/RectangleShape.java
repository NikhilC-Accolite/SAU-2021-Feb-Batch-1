package AuAssignment.SpringCore;

import java.util.ArrayList;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(value = "prototype")
public class RectangleShape {

	private int height; 
	private int width; 

	@Autowired
	@Qualifier("point")
	private ArrayList<RectanglePoint> points;

	@Autowired
	@Qualifier("pointMapping")
	private Map<Integer, RectanglePoint> pointsMap;
	
	@Autowired
	@Qualifier("pointsSet")
	private Set<RectanglePoint> pointsSet;


	public Set<RectanglePoint> getPointsSet() {
		return pointsSet;
	}

	public void setPointsSet(Set<RectanglePoint> pointsSet) {
		this.pointsSet = pointsSet;
	}

	public Map<Integer, RectanglePoint> getPointsMap() {
		return pointsMap;
	}

	public void setPointsMap(Map<Integer, RectanglePoint> pointsMap) {
		this.pointsMap = pointsMap;
	}

	public int getHeight() {
		return height;
	}

	public ArrayList<RectanglePoint> getPoints() {
		return points;
	}

	public void setPoints(ArrayList<RectanglePoint> points) {
		this.points = points;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public RectangleShape(int height,int width) 
	{ 
		this.height = height;
		this.width = width;
	} 

	public void drawUsingHeightWidth() {
		System.out.println("Rectangle with height "+ getHeight() +" and width "+ getWidth());
	}

	public void drawUsingPointsList() {
		int index = 1;
		System.out.println("\nPoints Values obtained by arraylist");
		for (int i = 0; i < this.points.size(); i++) {
			System.out.println("Point: " + index + "-> (" + this.points.get(i).getX() + ", " + this.points.get(i).getY()+")");
			index++;
		}
	}

	public void drawUsingPointsMap() {
		System.out.println("\nPoints Values obtained by Hashmap");
		for(Map.Entry<Integer, RectanglePoint> m:this.pointsMap.entrySet()){  
			System.out.println("Point-> (" + m.getKey()+", "+ m.getValue().toString()+")");  
		}
	}
	
	public void drawUsingPointsSet() {
		System.out.println("\nPoints Values obtained by Set");
			System.out.println("Points->" + this.pointsSet.toString());
	}
}
