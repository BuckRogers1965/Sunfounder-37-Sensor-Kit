/**
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 * --------------------------------------------------------------------
 * @author pod 
 * @version v0.3
 * @package vlatex
 *
 */

function vlatex_dblclick(obj, contents)
{
  // Close existing popup
  var oldpopup = document.getElementById('vlatex_codepopup');
  if (oldpopup) vlatex_popupclose(oldpopup);

  var father = obj.parentNode; // Find parent of the img element
  
  // Create container
  var popup = document.createElement('div');
  popup.setAttribute('id', 'vlatex_codepopup');
  
  // Insert closing button
  var img = document.createElement('img');
  img.src = IMGDIR_BUTTON + '/collapse_alt.gif';
  img.setAttribute('alt', vlatex_popup_close);
  img.setAttribute('title', vlatex_popup_close);
  img.setAttribute('onClick', 'vlatex_popupclose(this.parentNode)');
  popup.appendChild(img);
  
  // Insert caption (phrased)
  var caption = document.createElement('p');
  var captiontext = document.createTextNode(vlatex_popup_caption);
  caption.appendChild(captiontext);
  popup.appendChild(caption);
  
  // Insert source code in a blockquote element
  var block = document.createElement('blockquote');
  block.innerHTML = contents.replace('&amp;', '&'); // Replace &amp; with & to correct oversafety measures
  popup.appendChild(block);

  father.insertBefore(popup, obj);
  
  // Move popup close to the formula
  var newpopup = document.getElementById('vlatex_codepopup');
  newpopup.style.left = Math.min(father.offsetWidth - newpopup.offsetWidth-5 , obj.offsetLeft) + "px";
  popup.style.top = obj.offsetTop + obj.offsetHeight + 5 + "px";
}

// Close a popup
function vlatex_popupclose(obj)
{
  obj.parentNode.removeChild(obj);
}