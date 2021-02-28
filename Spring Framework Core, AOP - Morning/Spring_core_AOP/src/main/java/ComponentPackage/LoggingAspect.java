package ComponentPackage;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;


@Aspect
@Component
public class LoggingAspect {

	@Around("@annotation(LoggingInterface)")
	public void LoggingAdviceAround(){
		System.out.println("ADVICE -> Around ");
	}

	@AfterThrowing("@annotation(LoggingInterface)")
	public void LoggingAdviceThrow(){
		System.out.println("ADVICE -> AfterThrowing ");
	}

	@AfterReturning("@annotation(LoggingInterface)")
	public void LoggingAdviceReturn(){
		System.out.println("ADVICE -> AfterReturning ");
	}

	@After("@annotation(LoggingInterface)")
	public void LoggingAdvice(){
		System.out.println("ADVICE -> After ");
	}
}