 


let nextId = 1;
const orders = [];

function createOrder(customer, item, qty) {
  
    if (!customer || !item || !qty || Number(qty) <= 0) {
        return { ok: false, error: "Invalid input" };
    }

  
    const order = {
        id: nextId++,
        customer: customer.trim(),
        item: item.trim(),
        qty: Number(qty),
        status: "new"
    };


    orders.push(order);

  
    return { ok: true, order };
}

function findById(id) {

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === id) {
            return orders[i];
        }
    }
    return null;
}

function list() {

    return [...orders];
}

function setStatus(id, newStatus) {
   
    const order = findById(id);
    if (!order) {
        return { ok: false, error: "Order not found" };
    }

    order.status = newStatus;
    return { ok: true, order };
}


module.exports = {
    createOrder,
    findById,
    list,
    setStatus
};