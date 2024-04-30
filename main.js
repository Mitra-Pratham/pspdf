let fileHandle;
const fr = new FileReader();
const openSesame = document.getElementById('openSesame');
openSesame.addEventListener('click', async () => {
    // Destructure the one-element array.
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const url = URL.createObjectURL(file);
    PSPDFKit.unload("#pspdfkit")
    PSPDFKit.load({
        container: "#pspdfkit",
        document: url,
    })
        .then(function (instance) {
            console.log("PSPDFKit loaded", instance);
        })
        .catch(function (error) {
            console.error(error.message);
        });
});