/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    //create a dummy element that points at the first element of the linked list 
    // the dummy element will be used to traverse the linked list starting from the first element
    let dummy= new ListNode(-1,head) ;
    head=dummy ;
    
    while (dummy.next)
    {

        //if the next element equals the value that we are looking for then we skip it 
        if (dummy.next.val === val)
        {
            dummy.next=dummy.next.next
        }
        else
        //else we just go to the next element
        {
            dummy=dummy.next
        }
    }
    return head.next; 
};
