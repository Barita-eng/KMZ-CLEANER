function uploadFile() {

    const file = document.getElementById("fileInput").files[0];

    if (!file) {

        alert("Select KMZ file");
        return;

    }

    document.getElementById("status").innerText =
        "Uploading...";



    // nanti ganti dengan API backend

    setTimeout(() => {

        document.getElementById("status").innerText =
            "Done (demo only)";

    }, 1000);

}
