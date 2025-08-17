const eventBus = require("./eventBus");
const store = require("./store");

// normalize: support payload as { id } أو رقم مباشر
function getId(payload) {
  if (payload && typeof payload === "object" && "id" in payload) return Number(payload.id);
  return Number(payload);
}

// order:created
eventBus.on("order:created", (order) => {
console.log(`[EVT] order:created #${order.id} for ${order.customer} (${order.item} x${order.qty}`);
});

// order:paid
eventBus.on("order:paid", (payload) => {
  const id = getId(payload);
  const order = store.findById(id);
  if (!order) return eventBus.emit("error", "Order not found");
  if (order.status === "shipped" || order.status === "canceled") {
    return eventBus.emit("error", "Invalid transition to paid");
  }
  store.setStatus(id, "paid");
  console.log(`[EVT] order:paid #${id}`);
  eventBus.emit("order:statusChanged", { id, status: "paid" });
});

// order:packed
eventBus.on("order:packed", (payload) => {
  const id = getId(payload);
  const order = store.findById(id);
  if (!order) return eventBus.emit("error", "Order not found");
  if (order.status !== "paid") {
    return eventBus.emit("error", "Pack requires status=paid");
  }
  store.setStatus(id, "packed");
  console.log(`[EVT] order:packed #${id})`);
  eventBus.emit("order:statusChanged", { id, status: "packed" });
});

// order:shipped
eventBus.on("order:shipped", (payload) => {
  const id = getId(payload);
  const order = store.findById(id);
  if (!order) return eventBus.emit("error", "Order not found");
  if (order.status !== "packed") {
    return eventBus.emit("error", "Ship requires status=packed");
  }
  store.setStatus(id, "shipped");
  console.log(`[EVT] order:shipped #${id}`);
  eventBus.emit("order:statusChanged", { id, status: "shipped" });
});

// order:canceled
eventBus.on("order:canceled", (payload) => {
  const id = getId(payload);
  const order = store.findById(id);
  if (!order) return eventBus.emit("error", "Order not found");
  if (order.status === "shipped") {
    return eventBus.emit("error", "Cannot cancel shipped order");
  }
  store.setStatus(id, "canceled");
  console.log(`[EVT] order:canceled #${id} ❌`);
  eventBus.emit("order:statusChanged", { id, status: "canceled" });
});

// status changed
eventBus.on("order:statusChanged", ({ id, status }) => {
  console.log(`[EVT] statusChanged  #${id} → ${status}`);
});

// errors
eventBus.on("error", (msg) => {
  console.log(`[ERR] ${msg}`);
});

// Export nothing; requiring this file attaches listeners
module.exports = {};
