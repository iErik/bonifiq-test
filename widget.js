// Of course, realistically you would want to have this
// script be include in your server's assets page together
// with the assets of the widget itself and we would then
// load the Widget's HTML file from the assets page... But
// this is not the environment we're dealing with here.
//
// If you want to test this locally, you're going to have to
// use the development server, it would be trivial to adapt
// the script to allow us achieve the same result for a
// website that is being served on the internet, but that
// wouldn't work for testing locally.

(function () {
  const IFRAME_URL = 'http://localhost:3000'

  const iframeEl = document.createElement('iframe')

  iframeEl.src = IFRAME_URL
  iframeEl.width = 60
  iframeEl.height = 60

  iframeEl.style.position = 'fixed'
  iframeEl.style.bottom = '10px'
  iframeEl.style.right = '10px'
  iframeEl.style.background = 'transparent !important'
  iframeEl.style['z-index'] = '9999'

  const loggedUserId = window.parent.loggedUserId
  iframeEl.addEventListener('load', () => {
    iframeEl.contentWindow.postMessage(loggedUserId, IFRAME_URL)
  })

  const onShowWidget = (ev) => {
    const data = ev.data || {}
    if (data.action != 'showWidget') return

    const width = data.value ? 320 : 60
    const height = data.value ? 680 : 60

    iframeEl.width = width
    iframeEl.height = height
    iframeEl.style.width = width
    iframeEl.style.height = height
  }

  window.onload = () => {
    document.body.appendChild(iframeEl)
    window.addEventListener('message', onShowWidget)
  }
})();
