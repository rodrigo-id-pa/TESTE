(function ($) {
  var texts = [
      'Seja Bem-vindo ao meu site.',
      'Me chamo Rodrigo, sou Desenvolvedor Front-End',
      'Sou estudante de Análise e desenvolvimento de sistemas da Unopar.',
      'Meu objetivo é crescer e desenvolver profissionalmente junto à empresa.',
    ],
    row = 0,
    textPos = 0,
    content = '';

  function typeWriter() {
    if (row === texts.length) {
      return;
    }
    $('#textTyping').html(content + texts[row].substring(0, textPos) + '_');
    textPos += 1;
    if (texts[row].length + 1 === textPos) {
      // sentence ends
      content += texts[row] + '<br />';
      row += 1;
      textPos = 0;
      setTimeout(() => {
        typeWriter();
      }, 50);
    } else {
      setTimeout(() => {
        typeWriter();
      }, 50);
    }
  }
  typeWriter();
})(jQuery);
