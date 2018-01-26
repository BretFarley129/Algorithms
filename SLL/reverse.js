
class Node{
    constructor(value){
        this.val = value;
        this.next = null
    }
}
class SLL{
    constructor(){
        this.head = null
    }
    print(){
        var cur = this.head;
        while (cur){
            console.log(cur.val);
            cur = cur.next;
        }
    }
    add(value){
        var cur = this.head;
        if(cur){
            while(cur.next){
                cur = cur.next;
            }
            cur.next = new Node(value);
        }
        else{
            this.head = new Node(value);            
        }
        return this
    }
}
function reverse(SLL){
    var cur = SLL.head;
    while(cur.next){
        cur = cur.next;
    }
    var end = cur;
    var stop = null;
    while(SLL.head != end){
        cur = SLL.head;
        var temp = SLL.head;
        while(cur.next != stop){
            cur = cur.next;
        }
        SLL.head = temp.next;
        temp.next = stop;
        cur.next = temp;
        stop = temp
    }
}
list = new SLL();
list.add(1).add(2).add(3).add(4).add(5).print();
reverse(list);
list.print();
