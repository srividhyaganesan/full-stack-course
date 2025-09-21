public class backtracking {

    public static int countingways(int row,int col){
        if(row==2 && col==2){
            return 1;
        }
        if(row>2 || col>2){
            return 0;
        }
        // at each pos he has 2 choices
        return countingways(row+1,col)+countingways(row, col+1);
    }

    public static void printpaths(int row,int col,String s){
        if(row==2 && col==2){
            System.out.println(s);
        }
        if(row>2 || col>2){
            return ;
        }
        // at each pos he has 2 choices
         printpaths(row+1,col,s+"r");
         printpaths(row, col+1, s+"d");
         
    }



    public static void main(String[] args) {
        
        int output=countingways(0,0);
        System.out.println(output);

        printpaths(0,0,"");

    }

}
