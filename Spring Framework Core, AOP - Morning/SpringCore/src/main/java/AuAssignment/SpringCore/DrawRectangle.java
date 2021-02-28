package AuAssignment.SpringCore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class DrawRectangle {
	public static void main(String args[]) {
		
		ApplicationContext factory = new AnnotationConfigApplicationContext(AppConfig.class);
        RectangleShape rectangleWH = (RectangleShape) factory.getBean("rectangle");
        RectangleShape rectangleList = (RectangleShape) factory.getBean("rectangle");
        RectangleShape rectangleMap = (RectangleShape) factory.getBean("rectangle");
        RectangleShape rectangleSet = (RectangleShape) factory.getBean("rectangle");
        
        rectangleWH.drawUsingHeightWidth();
        rectangleList.drawUsingPointsList();
        rectangleMap.drawUsingPointsMap();
        rectangleSet.drawUsingPointsSet();
	}
}
