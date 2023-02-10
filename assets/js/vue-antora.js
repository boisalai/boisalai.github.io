const Antora = {
    created: function(){
        hljs.highlightAll();
        hljs.highlightAll();
    },
    template: `<div class="container mt-5">
<h1>{{ $t("antora.title") }}</h1>
<p v-html="$t('antora.para1')"></p>

<img src="assets/img/antora.png" style="width: 100%; max-width: 700px;">

<p>Antora is a modular static site generator designed for creating documentation sites from AsciiDoc documents. 
Its site generator aggregates documents from versioned content repositories and processes them using Asciidoctor.</p>

<p>To run Antora, you need to install both the CLI and a site generator.</a>

<pre><code class="language-bash">npm i -g @antora/cli @antora/site-generator-default</code></pre>

<p>Once these packages are installed, you can use the antora command to generate your site.</p>

<pre><code class="language-bash">cd antora
rm -r build
antora --fetch --stacktrace antora-playbook.yml
# Site generation complete!
# Open file:///Users/[...]/antora/build/site/index.html in a browser to view your site.
</code></pre>`
}