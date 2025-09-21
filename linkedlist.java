import java.util.*;
public class linkedlist {

    public  class node{
        int data;
        node next;
        public node(int data){
            this.data=data;
            this.next=null;
        }
    }

    public static node head;
    public static node tail;
    public static int size;

    public void addfirst(int data){
        
        node newnode= new node(data);
        size++;
        // if ll is empty
        if(head==null){
           head=tail=newnode; 
           return;
        }
        newnode.next=head;
        head=newnode;

    }

    public void addlast(int data){
        node newnode=new node(data);
        size++;
        // if ll is empty
        if(head==null){
            head=tail=newnode;
            return ;
        }

        tail.next=newnode;
        tail=newnode;
    }

    public void addmiddle(int data,int idx){
        node newnode=new node(data);
        node temp=head;
        size++;
        int cnt=1;
        while(cnt<idx){
            temp=temp.next;
            cnt++;
        }
        node nextnode=temp.next;
        newnode.next=nextnode;
        temp.next=newnode;
    }

    public void delfir(){
        if(size==1){
            head=tail=null;
            return;
        }
        size--;
        node temp=head.next;
        head.next=null;
        head=temp;
        
    }

    public void dellast(){
        if(size==1){
            head=tail=null;
            size=0;
            return;
        }
        node temp=head;
        int cnt=1;
        while(cnt<size-1){
            temp=temp.next;
            cnt++;
        }
        
        
        temp.next=null;
        tail=temp;
        size--;
    }

    public int search(int ele){
        node temp=head;
        int idx=0;
        while(temp!=null){
            if(temp.data==ele){
                return idx;
            }
            temp=temp.next;
            idx++;
        }
        return -1;
    }

    public int recsearch(node head,int data,int idx){
        if(head==null){
            return -1;
        }
        if(head.data==data){
            return idx;

        }
        node nextnode=head.next;
        return recsearch(nextnode, data, idx+1);
    }

    public void reverse(){
        node prev=null;
        node curr=head;
        while(curr!=null){
            node next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        head=prev;
    }

    public void printlist(){
        node temp=head;
        while(temp!=null){
            System.out.print(temp.data+" ");
            temp=temp.next;
        }
        System.out.println();
    }

    private node findmidnode(){
        node slow=head;
        node fast=head.next;
        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }

    private node reversell(node head){
        node prev=null;
        node curr=head;
        while(curr!=null){
            node next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        return prev;
    }



    public node reorderList() {
        if(head==null || head.next==null){
            return head;
        }
        // find mid node
        node mid=findmidnode();

        // divide it into 2 half
        node righthalf=mid.next;
        mid.next=null;
        node lefthead=head;

        // reverse 2nd portion of ll
        node righthead=reversell(righthalf);

        // copy the values in the linkedlist
        node temp=lefthead;
        
        node temp1=righthead;
        node temp2=new node(-1);
        node templl=temp2;
        while(temp!=null && temp1!=null){
            node nextTemp = temp.next;
            node nextTemp1 = temp1.next;

            templl.next = temp;
            templl = templl.next;

            templl.next = temp1;
            templl = templl.next;
            

            temp = nextTemp;
            temp1 = nextTemp1;
        }
        // to copy remaining elements
        while(temp!=null){
            templl.next=temp;
            templl=templl.next;
            temp=temp.next;
        }
        while(temp1!=null){
            templl.next=temp1;
            templl=templl.next;
            temp1=temp1.next;
        }
        templl.next=null;
        return temp2.next;
        
    }

    public node reverseinbw(int left,int right){
        if(right-left==0){
            return head;
        }
        // calc size
        int size=0;
        node temp=head;
        while(temp!=null){
            size++;
            temp=temp.next;
        }
        if(right-left ==size-1){
            // full ll we have to reverse
            reverse();
            return head;
        }

        node start=head;
        node end=head;
        int lp=0;
        int rp=0;
        while(lp!=left){
            start=start.next;
            lp++;
        }
        System.out.println("left idx "+start.data);
        while(rp!=right){
            end=end.next;
            rp++;
        }
        System.out.println("right idx "+end.data);

       // Find node before start
    node beforestart = null;
    if (left > 0) {
        beforestart = head;
        for (int i = 0; i < left - 1; i++) {
            beforestart = beforestart.next;
        }
    }

    // Node after end
    node afterend = end.next;

    // Reverse from start to end
    node prev = null;
    node curr = start;
    while (curr != afterend) {
        node next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Join parts
    if (beforestart != null) {
        beforestart.next = prev;
    } else {
        head = prev; // if reversing from index 0, update head
    }

    start.next = afterend;

    return head;
}

public static node oddeven() {
    if (head == null || head.next == null) return head;

    node temp = head;
    node temp1 = head;

    // Find the original tail
    while (temp1.next != null) {
        temp1 = temp1.next;
    }
    node tail = temp1;
    node originalTail = tail;

    int i = 1;
    node prev = null;

    while (temp != null && temp != originalTail.next) {
        if (i % 2 == 0) {
            // Even index node - move to tail
            node next = temp.next;

            // Unlink from current place
            if (prev != null) {
                prev.next = temp.next;
            }

            // Append to tail
            tail.next = temp;
            tail = temp;
            tail.next = null;

            // Move temp to next
            temp = next;
        } else {
            // Odd index - keep in place
            prev = temp;
            temp = temp.next;
        }
        i++;
    }

    return head;
}


    public static void main(String[] args) {
        linkedlist ll =new linkedlist();
        
        ll.addfirst(1);
        ll.addlast(2);
        ll.addlast(3);
        ll.addlast(4);
        ll.addlast(5);
        ll.printlist();
        /* 
        ll.addmiddle(6, 3);
        ll.printlist();
        ll.delfir();
        ll.printlist();
        ll.addfirst(1);
        ll.dellast();
        ll.printlist();
        ll.addlast(5);
        ll.printlist();
        System.err.println(ll.search(5));
        System.out.println(ll.recsearch(ll.head,1,0));
        ll.reverse();
        ll.printlist();
        ll.head=ll.reorderList();
        
        ll.head=ll.reverseinbw(1,4);
        ll.printlist();
        */

        ll.head=ll.oddeven();
        ll.printlist();



        


        
    }

}
