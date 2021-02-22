import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;

class ReverseOrderView {

      Map<String, String> getReverseOrderView(Map<String, String> mapping){
            Map<String, String> returnMapping = new HashMap<>();
            returnMapping = mapping.entrySet()
                .stream()               
                .sorted(Collections.reverseOrder(Map.Entry.comparingByKey()))
                .collect(Collectors.toMap(
                                    Map.Entry::getKey,
                                    Map.Entry::getValue,
                                    (oldValue, newValue) -> oldValue,
                                    LinkedHashMap::new
                                ));

            //System.out.println(returnMapping);
            return(returnMapping);
      }
}
 
class ReverseOrderViewDriver
{
    public static void main(String[] args)
    {
        Map<String, String> citiesAndCountries = new HashMap<>();
 
        citiesAndCountries.put("Bangalore", "India");
        citiesAndCountries.put("London", "England");
        citiesAndCountries.put("Sydney", "Australia");
        citiesAndCountries.put("CapeTown", "SouthAfrica");
        citiesAndCountries.put("New York", "USA");
        citiesAndCountries.put("Rome", "Italy");
        System.out.println("Keys in original order view: "+citiesAndCountries);
 
        ReverseOrderView reversingObject = new ReverseOrderView();
        System.out.println("Keys in reverse order view: "+reversingObject.getReverseOrderView(citiesAndCountries));        //System.out.println("Sorted Map by Keys :\n" + );
    }
}