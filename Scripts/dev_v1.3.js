/*!
 * Vexel CSS ✨ v1.3 Vexel Inc.
 * Copyright 2025 - Licensed under MIT
*/

// NOTICE: This JS File Is Only For Dev's Versions Of Vexel-CSS.

const dev_number = ['1','1','1','.','3'];

// You Can See Here SOME! Random Componets We Ware Built It:
const dev_componets = ['Button','Typography','Figure','Badge','Acrodation','SafeArea',['card','toast','notifications'],'Circle','Emoji','Hr','Select','Inputs','Borders','Blockquote','Dropdown','Alert','Nav/Navbar','Grid System','Progress','Tooltip'];

let dev_build_number = new Set(dev_number);

let vexel_Welcome = document.querySelector('vexel-welcome');

vexel_Welcome.style.position = 'absolute';
vexel_Welcome.style.width = '150px';
vexel_Welcome.style.height = '150px';
vexel_Welcome.style.backgroundColor = 'red';

vexel_Welcome.className = 'center-ele';

let style = `
  <style>
     .vexel-text
     {
       color: green;
     }
  </style>
`;

let vexel_text = document.createElement('h1').innerText = 'HI.';

vexel_Welcome.append(vexel_text);
vexel_Welcome.append(style);
vexel_text.className = 'vexel-text';