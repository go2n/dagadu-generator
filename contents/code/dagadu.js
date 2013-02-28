// -*- coding: iso-8859-1 -*-
/*
 *   Author: Sarwo Hadi Setyana <sh.setyana@gmail.com>
 *   Date: Thu Jul 5 2012, 08:17:40
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU Library General Public License as
 *   published by the Free Software Foundation; either version 2 or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details
 *
 *   You should have received a copy of the GNU Library General Public
 *   License along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

function createInput() {
        inputFrame = new Frame(mainLayout);
        inputLayout = new LinearLayout(inputFrame);
        
        textSource = new LineEdit(inputLayout);
        inputLayout.addItem(textSource);
        
        textSource.returnPressed.connect(dagadu);
        
        dagaduButton = new PushButton(inputLayout);
        dagaduButton.text = 'Dagadu-kan';
        inputLayout.addItem(dagaduButton);
        
        dagaduButton.clicked.connect(dagadu)
        
        return inputFrame
  
}

mainLayout = new LinearLayout(plasmoid);
mainLayout.orientation = QtVertical

inputLayout = new LinearLayout(plasmoid);

labelTitle = new Label();
labelTitle.text = '<big><b>Dagadu Generator<b></big>';

textDestination = new TextEdit();
textDestination.readOnly = true;

mainLayout.addItem(labelTitle);
mainLayout.addItem(createInput());
mainLayout.addItem(textDestination);

function dagadu() {
        textDestination.text = '<big><b><u>Result:</b></u></big><div style="margin-left: 50px;"><p>' + dagaduString(textSource.text) + '</p></div>'
}

/*
 *   function dagaduString(aString) and dagaduChar(c)
 *   created by Pakdhe Lantip (http://twitter.com/lantip)
 */

function dagaduString(aString) {
        aString = aString.toLowerCase();
        var last = aString.length;
        var result = "";
        for (var i = 0; i < last ; i++) {
                var tesdua = 'n';
                var siji = '';
                var loro = '';
                var balik = '';
                var ojonambah = 'n';

                siji = aString.charAt(i);
                if(i == 0) {
                        if(siji == 'a') {
                                balik = 'pa';
                                tesdua = 'y';
                                ojonambah = 'y';
                        }
                        if(siji == 'e') {
                                balik = 'pe';
                                tesdua = 'y';
                                ojonambah = 'y';
                        }
                        if(siji == 'i') {
                                balik = 'pi';
                                tesdua = 'y';
                                ojonambah = 'y';
                        }
                        if(siji == 'o') {
                                balik = 'po';
                                tesdua = 'y';
                                ojonambah = 'y';
                        }
                        if(siji == 'u') {
                                balik = 'pu';
                                tesdua = 'y';
                                ojonambah = 'y';
                        }
                        if(siji == 'p') {
                                balik = '';
                                tesdua = 'y';
                                ojonambah = 'y';
                        }
                }

                if(i < last-1) {
                        loro = aString.charAt(i+1);
                        if(siji == 'n' && loro == 'y') {
                                balik = 'k';
                                tesdua = 'y';
                        }
                        if(siji == 'n' && loro == 'g') {
                                balik = 'l';
                                tesdua = 'y';
                        }
                        if(siji == 'd' && loro == 'h') {
                                balik = 'n';
                                tesdua = 'y';
                        }
                        if(siji == 't' && loro == 'h') {
                                balik = 'w';
                                tesdua = 'y';
                        }
                }

                if(i == last-1) {
                  if(siji == 't'){
                    balik = 'n';
                    tesdua = 'y';
                  }
                }

                if(tesdua == 'y') {
                        result += balik;
                        if(ojonambah == 'n')
                                i++;
                }
                else result += dagaduChar(aString.charAt(i))
        }
        return result;
}

function dagaduChar(c) {
        if (c == 'a') {
                return 'a'
        }
        else if (c == 'ng') {
                return 'l'
        }
        else if (c == 'dh') {
                return 'n'
        }
        else if (c == 'th') {
                return 'w'
        }
        else if (c == 'ny') {
                return 'k'
        }
        else if (c == 'b') {
                return 's'
        }
        else if (c == 'c') {
                return 'j' 
        }
        else if (c == 'd') {
                return 'm'
        }
        else if (c == 'e') {
                return 'e'
        }
        else if (c == 'f') {
                return 'h' 
        }
        else if (c == 'g') {
                return 't'
        }
        else if (c == 'h') {
                return 'p'
        }
        else if (c == 'i') {
                return 'i'
        }
        else if (c == 'j') {
                return 'c'
        }
        else if (c == 'k') {
                return 'ny'
        }
        else if (c == 'l') {
                return 'ng'
        }
        else if (c == 'm') {
                return 'd'
        }
        else if (c == 'n') {
                return 'dh'
        }
        else if (c == 'o') {
                return 'o'
        }
        else if (c == 'p') {
                return 'h'
        }
        else if (c == 'q') {
                return 's'
        }
        else if (c == 'r') {
                return 'y'
        }
        else if (c == 's') {
                return 'b'
        }
        else if (c == 't') {
                return 'g'
        }
        else if (c == 'u') {
                return 'u'
        }
        else if (c == 'v') {
                return 'h'
        }
        else if (c == 'w') {
                return 'th'
        }
        else if (c == 'x') {
                return 'x'
        }
        else if (c == 'y') {
                return 'r'
        }
        else if (c == 'z') {
                return 'z'
        }
        return c;
}