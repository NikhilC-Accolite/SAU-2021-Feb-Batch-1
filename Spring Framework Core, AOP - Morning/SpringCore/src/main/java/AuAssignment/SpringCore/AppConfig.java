package AuAssignment.SpringCore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.context.annotation.Bean;

public class AppConfig {
	
	@Bean(name="rectangle")
	public RectangleShape getRectangle() {
		return new RectangleShape(5,4);
	}
	
	@Bean(name="point")
	public ArrayList<RectanglePoint> getPoint() {
		ArrayList<RectanglePoint> point = new ArrayList<RectanglePoint>();
		point.add(new RectanglePoint(1,2));
		point.add(new RectanglePoint(4,8));
		point.add(new RectanglePoint(8,16));
		point.add(new RectanglePoint(-4,2));
		return point;
	}
	
	@Bean(name="pointMapping")
	public Map<Integer, RectanglePoint> getpointMap() {
		Map<Integer, RectanglePoint> pointMap = new HashMap<Integer, RectanglePoint>();
		pointMap.put(1,new RectanglePoint(1,2));
		pointMap.put(3,new RectanglePoint(4,8));
		pointMap.put(2,new RectanglePoint(8,16));
		pointMap.put(4,new RectanglePoint(-4,2));
		return pointMap;
	} 
	
	@Bean(name="pointsSet")
	public Set<RectanglePoint> getPointSet(){
		Set<RectanglePoint> pointSet = new HashSet<RectanglePoint>();
		pointSet.add(new RectanglePoint(1,2));
		pointSet.add(new RectanglePoint(4,8));
		pointSet.add(new RectanglePoint(8,16));
		pointSet.add(new RectanglePoint(-4,2));
		return pointSet;
	}
}
