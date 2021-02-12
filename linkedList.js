/* ===== Create a linked list class ===== 
Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.
*/
class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    //O(1)
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    //O(n)
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }        
    }
    //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
    //O(n)
    insertBefore(key, value) {
        if(this.head === null) {
            this.head = new _Node(value, this.head)
        } else {
            let currNode = this.head
            let prevNode = this.head
            while(currNode !== null && currNode.value !== key) {
                prevNode = currNode
                currNode = currNode.next
            }
            prevNode.next = new _Node(value, currNode)
        }
    }
    //Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
    //O(n)
    insertAfter(key, value) {
        if(this.head === null) {
            this.head = new _Node(value, this.head)
        }
        let currNode = this.head
        while(currNode !== null & currNode.value !== key) {
            currNode = currNode.next
        }
        currNode.next = new _Node(value, currNode.next)
    }
    //Implement a function called insertAt() that inserts an item at a specific position in the linked list.
    //O(n)
    insertAt(item, position) {
        if(this.head === null) {
            this.head = new _Node(item, this.head)
        }
        let currNode = this.head
        let count = 0
        while(count < position - 1) {
            currNode = currNode.next
            count++
        }
        currNode.next = new _Node(item, currNode.next)
    }
    //O(n)
    find(item) {
        let currNode = this.head
        if(!this.head) {
            return null
        }
        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }
        return currNode
    }
    //best: O(1)
    //Avg. & worst: O(n)
    remove(item) {
        if(!this.head) {
            return null
        }
        if(this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let previousNode = this.head
        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if(currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}

/* ===== Creating a singly linked list ===== 
Write a function main. Within the function, using the linked list class above, create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
*/ 
function main() {
    const SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    //add 'Tauhida' to the list
    SLL.insertLast('Tauhida')
    //remove 'Husker' from the list
    SLL.remove('Husker')
    //Add Athena before Boomer using your insertBefore() function.
    SLL.insertBefore('Boomer', 'Athena')
    //Add Hotdog after Helo using the insertAfter() method.
    SLL.insertAfter('Helo', 'Hotdog')
    //Using the insertAt() method insert Kat in the 3rd position of the list.
    SLL.insertAt('Kat', 2)
    SLL.remove('Tauhida')
    return SLL
}
main()

/* ===== Supplemental functions for a linked list =====
Implement the following functions that operate on your linked list class. Note that these should be free functions instead of methods of the linked list class, so implement them outside the linked list class. Test each function using the list created in exercise 1.
*/
//display: displays the linked list
//O(n)
const SLL = main()
function display(SLL) {
    let currNode = SLL.head
    while(currNode !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
}
display(SLL)
/*output: 
Apollo
Athena
Kat
Boomer
Helo
Hotdog
Starbuck*/

//size: returns the size of the linked list
//O(n)
function size(SLL) {
    let currNode = SLL.head
    let count = 0
    while(currNode !== null){
        count++
        currNode = currNode.next
    }
    console.log(count)
    return count
}
size(SLL)//output: 7

//isEmpty: finds if the list is empty or not (without using the size() function)
//O(1)
function isEmpty(SLL) {
    if(SLL.head === null) {
        return true
    } else {
        return false
    }
}
console.log(isEmpty(SLL))

//findPrevious: finds the node before the item you are looking for
//O(n)
function findPrevious(item, SLL) {
    let currNode = SLL.head
    let prevNode = SLL.head
    while(currNode !== null && currNode.value !== item) {
        prevNode = currNode
        currNode = currNode.next
    }
    console.log(prevNode.value)
    return prevNode.value
}
findPrevious('Starbuck', SLL)//output: Hotdog

//findLast: returns the last node in the linked list
//O(n)
function findLast(SLL) {
    let currNode = SLL.head
    console.log(currNode.value)
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    console.log(currNode.value)
    return currNode
}
findLast(SLL)//output: Starbuck

/* ===== Mystery Program ===== 
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the time complexity of this algorithm?
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
*/
//WhatDoesThisProgramDo() searches for duplicates and removes them.
//O(n^k)

/* ===== Reverse a list ===== 
Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.
*/
//O(n)
function reverseList(SLL) {
    let currNode = SLL.head
    let prevNode = SLL.head
    let nextNode = SLL.head
    while(nextNode !== null) {
        if(currNode === prevNode) {
            currNode.next === null
        } else {
            currNode.next = prevNode
        }
        prevNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }
    return prevNode
}
console.log("reverse", reverseList(SLL))//output: Starbuck, Hotdog, Helo, Boomer, Kat, Athena, Apollo

/* ===== 3rd from the end ===== 
Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.
*/
//O(n)
function thirdFromEnd(SLL) {
    let currNode = SLL.head;
    while (currNode.next.next.next.next.next !== null) {
      currNode = currNode.next;
    }
    console.log('3rd', currNode.value)
    return currNode;
  }
thirdFromEnd(SLL)

/* ===== Middle of a list ===== 
Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it by half will not find the correct middle of the linked list. So, don't use either of these approaches.
*/
//O(n)
function middle(SLL) {
    let fastNode = SLL.head
    let slowNode = SLL.head
    while(fastNode && fastNode.next) {
        slowNode = slowNode.next
        fastNode = fastNode.next.next//fastNode moves through list twice as fast as slowNode
    }
    console.log('slow', slowNode.value)
    return slowNode
}
middle(SLL)//output: Boomer

/* ===== Cycle in a list ===== 
Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.
*/
//O(n)
const CycleList = new LinkedList()
CycleList.insertFirst('1')
CycleList.insertLast('2')
CycleList.insertLast('3')
CycleList.insertLast('1')
CycleList.insertLast('2')
CycleList.insertLast('3')
CycleList.insertLast('1')
CycleList.insertLast('2')
CycleList.insertLast('3')

function cycle(list) {
    let currNode = list.head
    let results = []
    while(currNode !== null) {
        if(results.includes(currNode.value)) {
            console.log('true')
            return true
        }
        results.push(currNode.value)
        currNode = currNode.next
    }
    console.log('false')
    return false
}
cycle(CycleList)//output: true

/* ===== Sorting a list ===== 
Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.
*/
//O(n^k)
const newList = new LinkedList()
newList.insertFirst('3')
newList.insertLast('2')
newList.insertLast('5')
newList.insertLast('7')
newList.insertLast('1')

function sort(list) {
    let currNode = list.head
    let storeNode
    let shouldSort = true
    while(shouldSort) {
        shouldSort = false
        while(currNode.next !== null) {
            if(currNode.value > currNode.next.value) {
                storeNode = currNode.value
                currNode.value = currNode.next.value
                currNode.next.value = storeNode
                shouldSort = true
            }
            currNode = currNode.next
        }
    }
    
    if(!currNode.next) {
        currNode = list.head
    }
    console.log(currNode)
}
sort(newList)
display(newList)