package AuAssignment.AOP;

import ComponentPackage.ServiceAOP;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(Configaration.class);
        ServiceAOP serviceShape = ctx.getBean("serviceAOP",ServiceAOP.class);
        serviceShape.getSampleAOP().getText();
        serviceShape.getSampleAOPException();
    }
}