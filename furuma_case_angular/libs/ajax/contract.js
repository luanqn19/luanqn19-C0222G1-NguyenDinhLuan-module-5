function displayField(obj) {
    if ($(obj).is(':checked')) {
        document.getElementById('soLuongInput').classList.remove("display-invisible");
        document.getElementById('soLuongInput').classList.add("display-visible");
        document.getElementById('loaiDichVuInput').classList.remove("display-invisible");
        document.getElementById('loaiDichVuInput').classList.add("display-visible");
    } else {
        document.getElementById('soLuongInput').classList.remove("display-visible");
        document.getElementById('soLuongInput').classList.add("display-invisible");
        document.getElementById('loaiDichVuInput').classList.remove("display-visible");
        document.getElementById('loaiDichVuInput').classList.add("display-invisible");

    }
}