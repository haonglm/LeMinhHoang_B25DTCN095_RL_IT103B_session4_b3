let orders = ["MLT", "SSX", "LLTT"];
totalRevenue = 0;

for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let tableTotal = 0;

    for (let j = 0; j < order.length; j++) {
        let item = order[j];
        
        if (item === "S") {
            tableTotal += 35000;
        } else if (item === "M") {
            tableTotal += 42000;
        } else if (item === "L") {
            tableTotal += 48000;
        } else if (item === "T") {
            tableTotal += 10000;
        } else if (item === "X") {
            continue;
        }
    }

    if (tableTotal > 100000) {
        tableTotal = tableTotal * 0.9;
    }

    totalRevenue += tableTotal;
}

console.log(`tổng doanh thu: ${totalRevenue} VND`);