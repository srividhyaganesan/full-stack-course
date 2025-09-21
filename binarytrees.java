import java.util.*;
import java.lang.Math;
public class binarytrees {

     public  class node{
        int data;
        node left;
        node right;
        public node(int data){
            this.data=data;
            this.left=null;
            this.right=null;
        }
        
    }
    static int idx=0;
    static int maxi=0;

    public node buildpreorder(int arr[]){ // 0(n)
        
        if(idx>=arr.length || arr[idx]==-1 ){
            idx++;
            return null;
        }
        node newnode=new node(arr[idx++]);
        newnode.left=buildpreorder(arr);
        newnode.right=buildpreorder(arr);
        return newnode;
       


    }

    public void preordertraversal(node root){
        if(root==null){
            return;
        }
        // printroot
        System.out.println(root.data);
        // print leftsubtree
        preordertraversal(root.left);
        // print rightsubtree
        preordertraversal(root.right);


    }

    public void inordertraversal(node root){
        if(root==null){
            return;
        }
        // traverse leftsubtree
        inordertraversal(root.left);
        // print root
        System.out.println(root.data);
        // traverse rightsubtree
        inordertraversal(root.right);

    }

    public void levelordertraversal(node root){
        if(root==null){
            return;
        }
        Queue<node>q=new LinkedList<>();
        q.add(root);
        q.add(null);

        while(!q.isEmpty()){
            if(q.peek()==null){
                
                System.out.println();
                q.remove();
                if(q.isEmpty()){
                    break;
                }
                else{
                    q.add(null);
                }
            }
            
            // check if top is not null and if so add nodes
            if(q.peek()!=null){
                System.out.print(q.peek().data+" ");
                if(q.peek().left!=null){
                    q.add(q.peek().left);
                }
                // add right child node
                if(q.peek().right!=null){
                    q.add(q.peek().right);
                }
                // pop it from queue
                q.remove();
        }

    }
}

public int heightoftree(node root){
    if(root==null){
        return 0;
    }
    return Math.max(heightoftree(root.left),heightoftree(root.right))+1;
}

public int countnodes(node root){
    if(root==null){
        return 0;
    }
    return countnodes(root.left)+countnodes(root.right)+1;
}
public int sumofnodes(node root){
    if(root==null){
        return 0;
    }
    return sumofnodes(root.left)+sumofnodes(root.right)+root.data;
}

public void diameteroftree(node root){
    if(root==null){
        return ;
    }
    // calc height for every node and the maximum will be ur diameter
    maxi=Math.max(maxi,heightoftree(root.left)+heightoftree(root.right)+1);
    diameteroftree(root.left);
    diameteroftree(root.right);
    

}
    public static void main(String[] args) {
        int arr[]={1,2,4,9,10,-1,-1,-1,-1,5,-1,6,-1,7,-1,-1,3};
        binarytrees bt=new binarytrees();
        node root=bt.buildpreorder(arr);
        //System.out.println(root.data);
        //bt.preordertraversal(root);
        //bt.inordertraversal(root);
        //bt.levelordertraversal(root);
        //System.out.println(bt.countnodes(root));
       // System.out.println(bt.sumofnodes(root));
        bt.diameteroftree(root);
        System.out.println(bt.maxi);





    }

}
