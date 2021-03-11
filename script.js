class Node {
    next;
    data;
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    printList() {
        let pointer = this;
        while (pointer.next) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
        console.log(pointer.data);

    }

    getLast() {
        let pointer = this;
        while (pointer.next) {
            pointer = pointer.next;
        }
        return pointer;
    }

    add(data) {
        var newNode = new Node(data);
        this.getLast().next = newNode;
    }
}

var moshe = new Node(3);
moshe.add(5);
moshe.add(7);
moshe.add(94);

moshe.printList();