import java.util.*;
public class arrays2 {
    public static int calculatewaterlevel(int heights[],int index){
        int leftmax=Integer.MIN_VALUE;
        int rightmax=Integer.MIN_VALUE;
        if(index==0 || index==heights.length-1){
            return -1;
        }
        for(int i=0;i<index;i++)
        {
            leftmax=Math.max(leftmax, heights[i]);

        }
        for(int i=index+1;i<heights.length;i++){
            rightmax=Math.max(rightmax, heights[i]);
        }
        return Math.min(leftmax, rightmax);
    }
    public static void main(String args[]){
        int numbers[]={2, 1, 5, 3, 1, 0, 4 };
        int maxi=Integer.MIN_VALUE;
        int currsum=0;
        // prefix sum (brute force 2)
        /* 
        //int prefixsum[]=new int[numbers.length];
        for(int i=0;i<numbers.length;i++){
            
            int currsum=numbers[i];
            maxi=Math.max(maxi,currsum);
            for(int j=i+1;j<numbers.length;j++){
                currsum+=numbers[j];
                maxi=Math.max(maxi,currsum);

            }
        }
        System.out.println(maxi);
        */

        // Kadane's Algo (optimised)
        /* 
        for(int i=0;i<numbers.length;i++){
            currsum+=numbers[i];
            if(currsum<0){
                currsum=0;
            }
            maxi=Math.max(currsum,maxi);
        }
        if (maxi==0) {
            Arrays.sort(numbers);
            System.out.println(numbers[numbers.length-1]);
        }
        else{
        System.out.println(maxi);
        }
        */

        // trapping rainwater problem
        int heights[]={4,2,0,6,3,2,5};
        int maxcap=Integer.MIN_VALUE;
        int currcap=0;
        // brute force
        /* 
        for(int i=0;i<heights.length;i++){
            int waterlevel=calculatewaterlevel(heights,i);
            if(waterlevel!=-1 && (waterlevel-heights[i])>0){
                currcap+=(waterlevel-heights[i]);
            }
            maxcap=Math.max(currcap, maxcap);
        }
        if(currcap==0){
            System.out.println(-1);
        }
        else{
            System.out.println(maxcap);
        }
        */

        // auxilary arrays
        int leftmax[]=new int[heights.length];
        int rightmax[]=new int[heights.length];
        leftmax[0]=heights[0];
        int currheight=0;
        rightmax[heights.length-1]=heights[heights.length-1];
        for(int i=1;i<heights.length;i++)
        {
            leftmax[i]=Math.max(heights[i], leftmax[i-1]);
        } 
        for(int i=heights.length-2;i>=0;i--){
            rightmax[i]=Math.max(rightmax[i+1], heights[i]);
        } 
        
        for(int i=0;i<heights.length-1;i++)
        {
            currheight+=Math.min(leftmax[i],rightmax[i])-heights[i];
            
        }
        System.out.println(currheight);




    }

}
