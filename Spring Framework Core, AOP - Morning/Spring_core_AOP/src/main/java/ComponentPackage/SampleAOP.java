package ComponentPackage;

import org.springframework.stereotype.Component;

import ComponentPackage.LoggingInterface;

@Component
public class SampleAOP {
	private String text="AOPobj";
    
    @LoggingInterface
    public String getText()  {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}