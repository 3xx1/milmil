var tags = $('#content').find('a').each(function (index, tag) {
  if (~tag.href.indexOf('.html') && tag.href.startsWith('https://1000ya.isis.ne.jp')) {
    console.log(tag.href, 'linked!')
  }
})