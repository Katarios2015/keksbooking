const FILE_TYPES = ["gif", "jpg", "jpeg", "png"];

const avatarFileChooser = document.querySelector(".ad-form__field input[type=file]");
const avatarPreview = document.querySelector(".ad-form-header__preview");

const housePhotoFileChooser = document.querySelector(".ad-form__upload input[type=file]");
const housePhotoPreview = document.querySelector(".ad-form__photo");


const uploadPhotos = (fileChooser, preview) => {
    fileChooser.addEventListener("change", () => {
        const file = fileChooser.files[0];
        const fileName = file.name.toLowerCase();

        const matches = FILE_TYPES.some((it) => {
            return fileName.endsWith(it);
        });

        if (matches) {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                preview.style.padding = "0";
                preview.innerHTML = `<img src = ${reader.result} width='70' height='70'>`;
            });

            reader.readAsDataURL(file);

        }
    });
};

/*avatarFileChooser.addEventListener("change", () => {
    const file = avatarFileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
        return fileName.endsWith(it);
    });

    if (matches) {
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            avatarImage.src = reader.result;
        });

        reader.readAsDataURL(file);
    }
});*/




uploadPhotos(avatarFileChooser, avatarPreview);
uploadPhotos(housePhotoFileChooser, housePhotoPreview);
