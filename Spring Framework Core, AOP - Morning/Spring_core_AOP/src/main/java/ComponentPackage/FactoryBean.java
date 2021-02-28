package ComponentPackage;

import org.springframework.stereotype.Component;

@Component
public class FactoryBean {
    public Object getBean(String beanType){
        if(beanType.equals("AOPobj")) return new SampleAOP();
        return null;
    }
}