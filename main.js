function showToast(msg) {
    let toast = document.createElement("div");
    toast.className = `toast ${msg}`;
    if (msg === "Success") toast.innerHTML = `<i class="fa-solid fa-circle-check check"></i>Successfuly submitted`;
    else if (msg === "Error") toast.innerHTML = `<i class="fa-solid fa-circle-xmark n-check"></i>Please fix the error`;
    else toast.innerHTML = `<i class="fa-solid fa-circle-exclamation invalid"></i>Invalid input, check again`;
    document.getElementById("toastBox").appendChild(toast);
    setTimeout(() => { toast.remove(); }, 6000);
};