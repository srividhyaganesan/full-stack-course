import java.util.Scanner;

public class bitwise {

    public static int get_ith_bit(int n,int i){

        int ans=n & (1<<i);
        if(ans!=0){
            return 1;
        }
        return 0;

    }

    public static int set_ith_bit(int n,int i){
        return n | (1<<i);
    }

    public static int clear_ith_bit(int n,int i){
        return (n & (~(1<<i)));
    }
    public static int update_ith_bit(int n,int i,int newbit){
        if(newbit==0){
            return clear_ith_bit(n,i);
        }
        return set_ith_bit(n, i);
    } 
    
    public static int clear_last_ibits(int n,int i){
        while(i>=0){
            n=clear_ith_bit(n, i);
            i--;

        }
        return n;
    }

    public static int clear_range_bits(int n,int i,int j){

        for(int k=i;k<=j;k++){
            n=clear_ith_bit(n, k);
        }
        return n;
    }

    public static boolean check_power_of_2(int n){
        // brute force
        /* 
        if((n&1)!=0){
            return false;
        }
        else{
            while(n!=0){
                int rem=n%2;
                if((rem & 1) !=0 && n!=1){
                    return false;
                }
                n=n/2;
            }
        }
        return true;
        */

        // optimised
        if((n & (n-1))==0){
            return true;
        }
        return false;
    }

    public static int count_set_bits(int n){
        int cnt=0;
        while(n!=0){
            cnt+=get_ith_bit(n,0);
            n=n>>1;
        }
        return cnt;
    }

    public static void main(String[] args){
        /* 
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        System.out.println(get_ith_bit(n,3));
        System.out.println(set_ith_bit(n, 2));
        System.out.println(clear_ith_bit(n, 1));
        System.out.println(update_ith_bit(n,2,1));
        // System.out.println(clear_last_ibits(n,1));
        // System.out.println(clear_range_bits(n,2,7));
        // System.out.println(check_power_of_2(n));

        System.out.println(count_set_bits(n));

        */
    }
}
       