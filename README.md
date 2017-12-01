# Popup List in Alloy

Popup window with a search functionality for selecting an option.

## Overview

The design is very simple. The widget looks like a simple dropdown field similar to an Android dropdown picker.

<img src="https://s7.postimg.org/4jj40zfq3/Captura_de_Tela_2017-12-01_a_s_14.15.35.png" width="350"/>

When clicked, it opens a popup window similar to a modal window. Background content is disabled and a gray overlay is placed between the background content of your app and the popup view.

<img src="https://s7.postimg.org/8fwfwzg57/Captura_de_Tela_2017-12-01_a_s_14.15.53.png" width="350"/>

A search functionality becomes available and the user is able to scroll through the available options.

<img src="https://s7.postimg.org/bzidmsb57/Captura_de_Tela_2017-12-01_a_s_14.15.45.png" width="350"/>

## Use it on your app!

##### Alloy
```
<Widget id="myPopupList" src="listPopup"/>
```

##### Controller
```
/* Params:
* an array with all available options
* default text to show on the field to be presented on the screen (the one similar to the picker)
* the current window
* callback function to be called when an option is selected (optional argument)
*/
$.myPopupList.initialize(optionsArray,dropdownDefaultText,$.currentWindow, function(selectedOption)
{
    console.log(selectedOption);
}); 
```

The widget comes with many other functions such as **setTop**,**setWidth**,**getSelectedValue**,**setSelectedValue**, and **setVisibility**.
