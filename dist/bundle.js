(()=>{"use strict";const t=document.querySelector(".content");let e;const o=()=>"",l=c=>{t.innerHTML=c(),document.querySelector(".choose-difficulty__start-button")&&document.querySelector(".choose-difficulty__start-button").addEventListener("click",(()=>{const t=document.querySelectorAll(".choose-difficulty__real-radio");for(const o of t)o.checked&&(e=o.value);e&&(l(o),setTimeout((()=>alert(`Вы перешли на поле для игры, выыбрав уровень сложности ${e}`)),100))}))};l((()=>'<form class="choose-difficulty">\n\t<div class="choose-difficulty__title">Выбери сложность</div>\n\t<div class="choose-difficulty__difficulty-row">\n\t\t<label>\n\t\t\t<input class="choose-difficulty__real-radio" value="1" name="level" type="radio">\n\t\t\t<span class="choose-difficulty__custom-radio">1</span>\n\t\t</label>\n\t\t<label>\n\t\t\t<input class="choose-difficulty__real-radio" value="2" name="level" type="radio">\n\t\t\t<span class="choose-difficulty__custom-radio">2</span>\n\t\t</label>\n\t\t<label>\n\t\t\t<input class="choose-difficulty__real-radio" value="3" name="level" type="radio">\n\t\t\t<span class="choose-difficulty__custom-radio">3</span>\n\t\t</label>\n\t</div>\n\t<div class="choose-difficulty__start-button">Старт</div>\n</form>'))})();