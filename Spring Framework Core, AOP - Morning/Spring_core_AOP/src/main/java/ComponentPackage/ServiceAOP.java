package ComponentPackage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ServiceAOP {

    @Autowired
    private SampleAOP AOPobj;
    
    public void getSampleAOPException()  throws NullPointerException {
        System.out.println("Raising NullPointerException");
        throw new NullPointerException();
    }
    
    public SampleAOP getSampleAOP()  throws ArithmeticException {
        System.out.println("\nIn getSampleAOP method\n");
        return AOPobj;
    }

    public void setSampleAOP(SampleAOP AOPobj) {
        this.AOPobj = AOPobj;
    }
    

}