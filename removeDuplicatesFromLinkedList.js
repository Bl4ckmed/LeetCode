/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
   
    //return [] if the linked list is null 
    if (head==null)
    {
        return head;
    }
    
    
    // create a dummy element to traverse the linked list 
    let traverse=head; 
    while (traverse.next)
    {
        //if the value is repeated, move the pointer to the next element
        if (traverse.val=== traverse.next.val)
        {
            traverse.next=traverse.next.next;
            console.log(traverse)
        }
        else 
        {
            // traveerse the linked list normally
            traverse=traverse.next; 
        }
    }
    
    return head;
};
