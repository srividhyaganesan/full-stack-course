class Student{
    int rno;
    String name;
    int marks;
    // to access instance variables for every object
    Student(int rollno,String name,int score){
        this.rno=rollno;
        this.name=name;
        this.marks=score;
    }

    // constructor overloading
    Student(){
        /* 
        this.rno=24;
        this.name="vidhya";
        this.marks=95;
        */
        // passing constructor inside another constructor
        this(13,"def",80);
    }

    // passing object as parameter
    Student(Student copy){
        this.marks=copy.marks;
        this.name=copy.name;
        this.rno=copy.rno;
    }

    void printdetails(){
        System.out.println("Hi "+this.name+" . you have got "+this.marks);
    }
}
public class oops{
    public static void main(String[] args) {
        Student student=new Student(4589,"Srividhya",96);
        student.printdetails();
        Student student2=new Student();
        student2.printdetails();
        Student student3=new Student(student);
        student3.printdetails();

        final int bonus=2000;
        // bonus=3000; - constant, cant be changed only if instance variables are primitives, for object this wont hold true

        final Student student5=new Student(100,"ganesan",90);
        student5.name="gayatri";
        student5.printdetails(); // can reassign instance var under nonprimitive datatypes

       // student5=new Student(); = cant reassign reference 
       }
}