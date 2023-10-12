'use strict';

// this file will print all css variables used in your project in an empty page.

const rootVariables = {};

function isColor(strColor) {
   const str = new Option().style;
   str.color = strColor;
   const test1 = str.color == strColor;
   const test2 = /^#[0-9A-F]{6,8}$/i.test(strColor);
   const test3 = /^linear-gradient/.test(strColor);

   return test1 || test2 || test3;
}

function getCSSVariablesList() {
   const styleSheets = Array.from(document.styleSheets).filter(
      sheet => sheet.href === null || sheet.href.startsWith(window.location.origin)
   );

   const rootStyleSheets = styleSheets.filter(sheet => {
      const cssRuleArr = Array.from(sheet.cssRules);
      let isRoot = false;

      cssRuleArr.forEach(rule => {
         if (rule.selectorText == ':root') isRoot = true;
      });
      return isRoot;
   });

   const rootStyleArr = [];
   rootStyleSheets.forEach(sheet => {
      rootStyleArr.push(Array.from(sheet.cssRules).filter(rule => rule.selectorText == ':root'));
   });

   const rootVarsArr = Array.from(rootStyleArr.flat()[0].style);
   rootVarsArr.forEach(rootVar => {
      const rootStyles = window.getComputedStyle(document.documentElement);
      rootVariables[rootVar] = rootStyles.getPropertyValue(rootVar);
   });

   console.log(rootVariables);
   printVariables();
}

function printVariables() {
   const listEl = document.querySelector('.cvl-list');
   listEl.innerHTML = '';
   Object.entries(rootVariables).forEach(([key, value]) => {

      const isValueColor = isColor(value);

      const html = `
         <li class="cvl-item">
            <div class="cvl-variableWrapper">
               <button class="cvl-btnCopy">
                  <img src="copy.svg" alt="copy icon">
               </button>
               <p class="cvl-variable">${key}</p>
            </div>
            <div class="cvl-valueBox">
               <div style="background: ${isValueColor ? value : '#fff'}" class="cvl-color"></div>
               <p class="cvl-value">${value}</p>
            </div>
         </li>
      `;

      listEl.insertAdjacentHTML('beforeend', html);
   });
}

getCSSVariablesList();
