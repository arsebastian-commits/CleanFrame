/* Tizen 5.5 (2020 TVs) predates flexbox gap. Flag it so style.css can use its margin fallbacks. */
(function () {
  var root = document.documentElement, probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;visibility:hidden;display:flex;flex-direction:column;row-gap:1px';
  probe.appendChild(document.createElement('div'));
  probe.appendChild(document.createElement('div'));
  root.appendChild(probe);
  if (probe.scrollHeight !== 1) root.className += (root.className ? ' ' : '') + 'no-flex-gap';
  root.removeChild(probe);
})();
