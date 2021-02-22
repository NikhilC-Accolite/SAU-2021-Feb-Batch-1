

public class AmericanFlag {
 public static void main(String[] args) {
 	System.out.println(" ____________________________________________________");
  String withStars = "|*  *  *  *  *  * ===================================|\n| *  *  *  *  *   ===================================|";
  String withoutStars = "|====================================================|";
  for (int i = 0; i < 4; i++) {
   System.out.println(withStars);
  }
  System.out.println("|*  *  *  *  *  * ===================================|");
  for (int i = 0; i < 5; i++) {
   System.out.println(withoutStars);
  }
  System.out.println(" ---------------------------------------------------- ");
   System.out.print(Color.YELLOW);
        System.out.print(Color.BLUE_BACKGROUND);
        System.out.println("YELLOW & BLUE");
        System.out.print(Color.RESET);
 }
}