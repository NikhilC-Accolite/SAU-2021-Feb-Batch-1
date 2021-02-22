import java.util.regex.Matcher;
import java.util.regex.Pattern;

class RegexReplace {

    String original_string;
    String pattern_string;
    String replacement_string;

    RegexReplace(String original, String pattern, String replacement){
      original_string = original;
      pattern_string = pattern;
      replacement_string = replacement;
    }

    String replaceDNASequence(){

      Pattern pattern = Pattern.compile(pattern_string, Pattern.CASE_INSENSITIVE);
      Matcher matcher_1 = pattern.matcher(original_string);

      while(matcher_1.find()){
        System.out.println("match found at index : "+matcher_1.start());
      }

      Matcher matcher = pattern.matcher(original_string);

      if(matcher.find()) {
        System.out.println(matcher.group(0));
        return(original_string.replaceAll(pattern_string, replacement_string));
      } 
      else {
        return("No Matching Substring to replace");
      }
    } 
}

class RegexReplaceDriver {
  public static void main(String[] args) {

      // start with A or G, followed by zero or one C or T, 
      // followed by 2 As, then a G and ends with A or G

      // Matches : ACAAGA,GTAAGA,ATAAGA,GCAAGA,AAAGA,BAAGA,ACAAGG,GTAAGG,
      //           ATAAGG,GCAAGG,AAAGG,BAAGG

      String dna_Sequence = "TAAAGAACGCAAGAAGTTACAAGATTGTAAGATTBAAGG";
      //String pattern = "[AG][CT]?[A]{2}[T]{3}G.[AG]";
      String pattern = "[AG][CT]?A{2}G[AG]";
      String newSubString = "AGCT";

      RegexReplace base_replacer = new RegexReplace(dna_Sequence,pattern,newSubString);
      String modified_string = base_replacer.replaceDNASequence();
      System.out.println("Original DNA Sequence: "+ dna_Sequence);
      System.out.println("Modified DNA Sequence: "+ modified_string);
  }
}