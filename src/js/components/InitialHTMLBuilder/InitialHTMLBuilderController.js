function InitialHTMLBuilder() {
    this.Original = this.buildInitialHTML(resolve, reject);
    return this;
}

InitialHTMLBuilder.prototype = {
  buildInitialHTML: function() {
    var original = document.createElement('div');
    original.innerHTML = document.documentElement.innerHTML;

    return original;
  }
}

module.exports = InitialHTMLBuilder;