
//  * Definition for singly-linked list.
 function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let suma = head;
    let llevada = 0;

    while (l1 && l2) {
        let sumaNodos = l1.val + l2.val + llevada;

        if (sumaNodos > 9) {
            llevada = 1;
            sumaNodos = sumaNodos % 10;
        } else {
            llevada = 0;
        }

        suma.next = new ListNode(sumaNodos);
        suma = suma.next;

        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        let sumaNodos = l1.val + llevada;
        if (sumaNodos > 9) {
            llevada = 1;
            sumaNodos = sumaNodos % 10;
        } else {
            llevada = 0;
        }

        suma.next = new ListNode(sumaNodos);
        suma = suma.next;

        l1 = l1.next;
    }

    while (l2) {
        let sumaNodos = l2.val + llevada;
        if (sumaNodos > 9) {
            llevada = 1;
            sumaNodos = sumaNodos % 10;
        } else {
            llevada = 0;
        }

        suma.next = new ListNode(sumaNodos);
        suma = suma.next;

        l2 = l2.next;
    }

    if (llevada === 1) {
        suma.next = new ListNode(1);
    }
};