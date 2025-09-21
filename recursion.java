import java.util.Scanner;

public class recursion {
    public static void print_numbers_from_n(int n){
        if(n==0){
            return ;
        }
        System.out.println(n);
        print_numbers_from_n(n-1);

        
    }

    public static void print_numbers_from_1(int n){
        if(n==0){
            return ;
        }
        print_numbers_from_1(n-1);
        System.out.println(n);


        
    }

    public static int nth_fibo_number(int n){

        if(n<=1){
            return n;
        }
        return nth_fibo_number(n-1)+nth_fibo_number(n-2);
    }

    public static boolean check_array_sorted(int [] arr,int i,int n){

            if( i==n-1){
                return true;
            }

            return arr[i]<=arr[i+1] & check_array_sorted(arr,i+1,n);
    }


    public static int find_first_occ(int [] arr,int n,int key,int i){

        if(arr[i]==key){
            return i;
        }
        if(i==n){
            return -1;
        }
        return find_first_occ(arr, n, key, i+1);
    }

    public static int find_last_occ(int [] arr,int key,int i){

        if(arr[i]==key){
            return i;
        }
        if(i==-1){
            return -1;
        }
        return find_last_occ(arr, key, i-1);
    }

    public static int find_x_pow_n(int x,int n){
        if(n==0){
            return 1;
        }
        return x*find_x_pow_n(x, n-1);
    }

    public static int find_x_pow_n_opt(int x,int n){
        if(n==1){
            return x;
        }
        
        int y= find_x_pow_n_opt(x,(n/2));
        y=y*y;
        if(n%2!=0){
            y=x*y;
        }
        return y;


        
    }

    public static int count_ways(int n){
         // tile can be placed either horizontally or vertically
         if(n<=1){
            return 1;
         }
         return count_ways(n-1)+count_ways(n-2);


    }

    public static String remove_dup(String s,int idx,StringBuilder sb){
        boolean occured=false;
        if(s.length()==1){
            return s;
        }
        if(idx==s.length()){
           return sb.toString();

        }
        for(int i=0;i<sb.length();i++){
            if(sb.charAt(i)==s.charAt(idx)){
                // already occured so skip
                occured=true;
                break;
            }
        }

        if(!occured){
            sb.append(s.charAt(idx));
        }
        return remove_dup(s, idx+1, sb);
        



    }

    public static void binary_strings(int n,int lastplace,String sb){
        if(n<=0){
            System.out.println(sb);
            return;
        }
        
        if(lastplace==0){
            binary_strings(n-1,1,sb+("1"));
        }
        binary_strings(n-1,0,sb+("0"));
        

    }

    public static int partitionarr(int [] arr,int si,int ei){
        int i=si-1;
        int pivot=arr[ei];
        
        for(int j=si;j<ei;j++){
            if(arr[j]<pivot){
                i++;
                int temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;

            }
        }
        i++;
        int temp=pivot;
        arr[ei]=arr[i];
        arr[i]=temp;
        
        return i;
    }

    public static void printarr(int [] arr,int n){
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }

    public static void quicksort(int[] arr,int si,int ei){
        if(si>=ei){
            return;
        }
        int pivoteleidx=partitionarr(arr, si, ei);
        quicksort(arr,si,pivoteleidx-1);
        quicksort(arr,pivoteleidx+1,ei);
        

    }

    public static void main(String[] args) {
        // print numbers from n to 1
        /* 
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        print_numbers_from_n(n);

        // print numbers from 1 to n
        print_numbers_from_1( n);
        int output=nth_fibo_number(n);
        System.out.println(output);

        sc.close();
        */

        // check if array is sorted or not

        
        int arr[]={1,2,2,3,4,3,5};
        boolean output=check_array_sorted(arr,0,arr.length);
        System.out.println(output);
        /* 
        int idx=find_first_occ(arr,arr.length,3,0);
        int idx1=find_last_occ(arr,3,arr.length-1);
        System.out.println(idx);
        System.out.println(idx1);
        System.out.println(find_x_pow_n(3,5));
        System.out.println(find_x_pow_n_opt(2,10));

        */

        // tiling problem
        /* 
        int n=4;
        System.out.println(count_ways(n));
        */

        // remove duplicates
        /* 
        StringBuilder sb=new StringBuilder("a");

        System.out.println(remove_dup("abcadeecfb",1,sb));

        */

        // binary strings problem
        /* 
        binary_strings(4,0,"");
        */

        // quick sort
        /* 

        int arr[]={6,3,9,8,2,5};
        int n=arr.length;
        quicksort(arr, 0, n-1);
        
        printarr(arr,n);
        */
       


    }
    
}
