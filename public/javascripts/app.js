$(document).ready(function () {
    $('button.btn-danger, button.btn-success').attr("hidden", true);
    $('li').click(function () {
        this.contentEditable = true;
        let selfId = this.attributes.name.value;
        $.each($('#' + selfId), (index, item) => {
            $(item).attr("hidden", false);
            console.log(item);
        });
    });
});