package AuAssignment.AOP;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@ComponentScan("ComponentPackage")
@EnableAspectJAutoProxy
public class Configaration {

}