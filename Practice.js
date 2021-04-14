class _Node {
    constructor(value, next) {
        this.value = value,
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        }
        let tempNode = this.head
        while(tempNode.next !== null) {
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, null)
    }
    delete(item) {
        if(this.head === null) {
            return null
        }
        if(this.head.value === item) {
            this.head = this.head.next
            return
        }
        let tempNode = this.head
        let prevNode = this.head
        while(tempNode !== null && tempNode.value !== item) {
            tempNode = tempNode.next
            prevNode = tempNode
        }
        if(tempNode === null) {
            return 'Item not found'
        }
        prevNode.next = tempNode.next
    }
    find(item) {
        let currNode = this.head
        if(this.head === null) {
            return null
        }
        if(this.head === item) {
            return this.head
        }
        while(currNode.value !== item) {
            currNode = currNode.next
        }
        if(currNode.value === null) {
            return 'Item not found'
        }
        return currNode
    }
}