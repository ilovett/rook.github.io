---
# front matter required for jekyll recognition
---

(() => {

  const Rook = window.Rook;

  Rook.changeVersion = (version) => {
    window.location.href = `${ Rook.current.project.path }/${ version }/${ Rook.current.filepath }`;
  };

  // replace all github links
  $('a[href]').each((i, $el) => {
    if ($el.href.match(/github\.com\/rook\/rook\/blob\/(.*?)\/demo\//)) {
    }
  });

})();
