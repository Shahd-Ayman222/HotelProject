function calculateTotal() {
    let price =
        document.getElementById("roomPrice").value;
    let nights =
        document.getElementById("nights").value;
    let total = price * nights;
    document.getElementById("result").innerHTML =
        "Total Price = $" + total;
}