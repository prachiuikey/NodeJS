// HELLO WORLD
console.log("Hello World");

// LINKED LIST
class Node {
    constructor(e) {
        this.element = e;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // ADD ELEMENT AT THE END
    addAtEnd(e) {
        var node = new Node(e);
        var current;

        if(this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // ADD ELEMENT AT FRONT
    addAtFront(e) {
        var node = new Node(e);
        var current;
        if(this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            node.next = current;
            this.head = node;
        }
        this.size++;
    }

    // REMOVE AN ELEMENT FROM THE INDEX
    removeElement(index) {
        if(index<0 || index >= this.size)
            console.log("Enter valid index");
        else {
            var cur, prev, pos=0;
            cur = this.head;
            prev = cur;

            if(index === 0)
                this.head = cur.next;
            else {
                while(pos < index) {
                    pos++;
                    prev = cur;
                    cur = cur.next;
                }

                prev.next = cur.next;
            }
            this.size--;

            return cur.element;
        }
    }



    // Print LinkedList
    printList() {
        var curr = this.head;
        var str = "";
        while(curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

var link = new LinkedList();

link.addAtEnd(10);
link.addAtEnd(20);
link.printList();

link.addAtFront(30);
link.printList();

link.addAtFront(50);
link.printList();
console.log(link.removeElement(2));
link.printList();

// LENGTH OF THE LIST
console.log(`Size: ${link.size}`);