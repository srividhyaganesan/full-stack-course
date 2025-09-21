import java.util.LinkedList;
import java.util.Stack;

public class StackB {

    public static class stack{
        static LinkedList<Integer>ll=new LinkedList<Integer>();
    

        // is empty function in ll
        public static boolean isempty(){
            return ll.size()==0;
        }

        // push in stack

        public static void push(int data){
            ll.addLast(data);
        }

        // pop in stack

        public static int pop(){
            if(isempty()){
                return -1;
            }
            int top=ll.removeLast();
            return top;

        }

        // peek in stack
        public static int peek(){
             if(isempty()){
                return -1;
            }
            int top=ll.getLast();
            return top;


        }
    
    }


public static void main(String[]args){
    stack s=new stack();
    s.push(0);
    s.push(1);
    s.push(2);
    System.out.println(s.peek());
    s.pop();
    System.out.println(s.peek());
    s.pop();
    System.out.println(s.peek());
    s.pop();
    System.out.println(s.peek());
    Stack<Integer>s1=new Stack<>();
    s1.push(0);
    s1.push(1);
    s1.push(2);
    s1.pop();
    System.out.println(s1.peek());
    s1.addFirst(3);
    System.out.println(s1.peek());
    s1.is
    
}
}
