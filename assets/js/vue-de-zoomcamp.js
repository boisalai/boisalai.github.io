const DeZoomcamp = {
    created: function(){
        /* hljs.highlightAll();
        hljs.highlightAll(); */
    },
    template: `<div class="container mt-5">
        <h1>Data Engineering Zoomcamp ({{ $t("de_zoomcamp.status") }})</h1>
        <p v-html="$t('de_zoomcamp.content')"></p>
        </div>`
}