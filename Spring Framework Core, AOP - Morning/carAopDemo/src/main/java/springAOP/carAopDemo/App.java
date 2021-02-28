package springAOP.carAopDemo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import CarService.CarService;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("spring.xml");
		CarService carService = (CarService) ctx.getBean("carService");
		carService.getCar().setCompanyName("Volkswagen");
		System.out.println(carService.getCar().getCompanyName());
    }
}
