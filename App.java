import java.util.Scanner;



public class App {

    public static int Binarysearch(int numbers[],int key){
        int start=0;
        int end=numbers.length-1;
        while(start<=end){
            int mid=start+(end-start)/2;
            if(numbers[mid]==key){
                return mid;
            }
            else if(numbers[mid]>key){
                end--;
            }
            else{
                start++;
            }
        }
        return -1;
    }
    public static void main(String[] args) throws Exception {
        // creation of an array
        /* 
        int marks[]=new int[5];
        int numbers[]={1,2,3};
        System.out.println(numbers.length);

        // input of an array
        Scanner sc= new Scanner(System.in);
        marks[0]=sc.nextInt();
        marks[1] =sc.nextInt();
        System.out.println(marks[0]);
        System.out.println(marks[1]);
        marks[1]=100;
        System.out.println(marks[1]);
        sc.close();     
    */

        // linear search
        /* 
        int marks[]={2,4,6,8,7,10,12};
        int key=9;
        int index=-1;
        for(int i=0;i<marks.length;i++){
            if(marks[i]==key){
                index=i;
                break;
            }

        }
        System.out.println(index);
        */

        // string search
        /* 
        String menu[]={"dosa","idli","samosa"};
        String menusearch="dosa";
        int index=-1;
        for (int i=0;i<menu.length;i++){
            if(menu[i]==menusearch){
                index=i;
                break;
            }
        }
        System.out.println(index);
        */

        // Largest in an array
        /* 
        int largest[]={-1,-2,-6,-5,-4,-7};
        int maxi=Integer.MIN_VALUE;
        for(int i=0;i<largest.length;i++){
            if(largest[i]>maxi){
                maxi=largest[i];
            }
        }
        System.out.println(maxi);
        */
        // binary search
        /* 
        int numbers[]={2,4,6,8,10,12};

        int index=Binarysearch(numbers,11);
        System.out.println(index);
        

        // max subarray sum
        int numbers[]={2,4,6,8,10};
        int maxi=Integer.MIN_VALUE;
        for (int i=0;i<numbers.length;i++){
            for (int j=i;j<numbers.length;j++)
            {
                int sum=0;
                for (int k=i;k<=j;k++){
                    sum+=numbers[k];

                }
                System.out.println(sum);
                if(maxi<sum){
                    maxi=sum;
                }
            }
            System.out.println();
            System.out.println();
  

        }
        System.out.println(maxi);
        */

        // salesforce qn
        int [] nums={9,3,3,3,9};
        int prefix_sum[]=new int[nums.length];
        prefix_sum[0]=0;
        // calc prefix sum
        for(int i=1;i<nums.length;i++){
            prefix_sum[i]=prefix_sum[i-1]+nums[i-1];
        }
        int cnt=0;

        for(int i=0;i<nums.length;i++){
            for(int j=i+2;j<nums.length;j++){
                if(nums[i]==nums[j]){
                    // to find in between capacity of the substring
                    int currsum=prefix_sum[j]-prefix_sum[i]-nums[i];
                    if(currsum==nums[i]){
                        cnt+=1;
                    }


                }
            }
        }
        System.out.println(cnt);
        
    }
}
