import { refs } from './refs';
import { scrolTo } from './scrol--by';
function onClickWorks() {
  refs.title.classList.remove('dis');
  refs.btnContactPorfo.classList.remove('dis');
  scrolTo('#list', 2);
}

function onClickContact() {
  refs.footer.classList.remove('dis');
  scrolTo('footer', 30);
}
function onClickParagraph() {
  refs.footer.classList.remove('dis');
  scrolTo('footer', 2);
}

function onClickFooter() {
  refs.footer.classList.remove('dis');
  scrolTo('#list', 2);
}
// listener
refs.parPortf.addEventListener('click', onClickWorks);
refs.btnWorks.addEventListener('click', onClickWorks);
refs.paragrCont.addEventListener('click', onClickParagraph);
refs.btnContacts.addEventListener('click', onClickContact);
refs.btnFoot.addEventListener('click', onClickFooter);
