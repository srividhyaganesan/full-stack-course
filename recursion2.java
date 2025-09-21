public class recursion2 {

    public static String skip_character(String s,int idx,StringBuilder sb){

        if(idx==s.length()){
            return sb.toString();
        }

        if(s.charAt(idx)!='a'){
            sb.append(s.charAt(idx));
        }
        return skip_character(s, idx+1, sb);
    }
    public static void print_subsets(String processed,String unprocessed){
        if(unprocessed.length()==0){
            System.out.println(processed);
            return;
        }

        // for every char we have 2 choices

        // take the char
        print_subsets(processed+unprocessed.charAt(0),unprocessed.substring(1));

        // ignore the char
        print_subsets(processed,unprocessed.substring(1));
    }

    public static String print_fancy_string(String unprocessed,StringBuilder sb,int cnt){
        if(unprocessed.length()==0){
            return sb.toString();
        }
        if(sb.charAt(sb.length()-1)==unprocessed.charAt(0)){
            cnt++;
            if(cnt==3){
                cnt--;
            }
            // same char but it didnt hit the limit so dont restore count
            else{
                sb.append(unprocessed.charAt(0));
            }
            

        }
        else{
            sb.append(unprocessed.charAt(0));
            // different char so restore the count
            cnt=1;
            }
        
        return print_fancy_string(unprocessed.substring(1), sb, cnt);

    }

    public static void permutations(String processed,String unprocessed){
        if(unprocessed.length()==0){
            System.err.println(processed);
        }

       for(int i=0;i<unprocessed.length();i++){
        permutations(processed+unprocessed.charAt(i),unprocessed.substring(0,i)+unprocessed.substring(i+1));
       }
        

    }
    public static void main(String[] args) {

        /*
        // skip a character
    String output=skip_character("bcdapple",0,new StringBuilder(""));
    
    System.out.println(output);

    */

    // print_subsets("","abc");


    /* 
    String output=print_fancy_string("eeetcode",new StringBuilder("l"),1);
    System.out.println(output);
    */
    String str="abcd";
    permutations("", str);

    

        
    }

    
    
}
