// Section 8: 43 -> 47:

enum OrderStatus {
    PENDING,
    INPROGRESS,
    DELIVERED,
    CANCELLED,
    RETURNED=500
}

function isDelivered(status: OrderStatus): boolean {
    if (status === OrderStatus.DELIVERED){
        return true
    }
    return false
}

const pendingOrder= isDelivered(OrderStatus.PENDING)
const inProgressOrder= isDelivered(OrderStatus.RETURNED)
const returnedOrder = isDelivered(OrderStatus.DELIVERED)
const deliveredOrder= isDelivered(OrderStatus.CANCELLED)

console.log(pendingOrder);
console.log(inProgressOrder);
console.log(returnedOrder);
console.log(deliveredOrder);