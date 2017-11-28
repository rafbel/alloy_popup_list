var listOptions;
var currentValue = -1;
var callback;

var ImageLib = require('imagelib');
ImageLib.initialize();

var imageDropdownIcon = ImageLib.createFromFile("images/icon_arrow_down.png");
var imageViewDropdownIcon = imageDropdownIcon.getViewByWidth(20);

var imageUpArrowIcon = ImageLib.createFromFile("images/icon_close.png");
var imageViewUpArrowIcon = imageUpArrowIcon.getViewByWidth(15);

var imageSearchIcon = ImageLib.createFromFile("images/icon_search.png");
var imageViewSearchIcon = imageSearchIcon.getViewByWidth(20);
    
$.viewDropdownIconHolder.add(imageViewDropdownIcon);
$.viewDismissArrowHolder.add(imageViewUpArrowIcon);
$.viewSearchIconHolder.add(imageViewSearchIcon);

function setVisibility(bool)
{
    $.viewListPopup.setVisible(bool);
    
    if (bool)
    {
        $.textFieldSearch.focus();
        $.textFieldSearch.setSelection($.textFieldSearch.getValue().length,$.textFieldSearch.getValue().length);
    }
}
function setTop(topValue)
{
     $.viewContainer.top = topValue;
}

$.setTop = setTop;

function setWidth(widthValue)
{
     $.viewContainer.width = widthValue;
}

$.setWidth = setWidth;



$.initialize = function(items,newText,window,callbackFunction)
{
    $.wrapper.remove($.viewListPopup);
    window.add($.viewListPopup);
    
    callback = (typeof callbackFunction != "undefined") ? callbackFunction : function(){};
    
    $.labelFieldText.text = newText;
    
    listOptions = items; 
    var _listItems = [];
    for (var i = 0; i < items.length; i++)
    {
        var itemObject = {
        					 labelItem: { text: items[i] },
            			 	 properties: { searchableText: items[i] }
        				 }; 
        _listItems.push(itemObject);
    }
    
    $.listSection.setItems(_listItems);
    
    $.viewContainer.addEventListener('click',function(){
        setVisibility(true);    
    });
    
    $.viewDropdownIconHolder.addEventListener('click',function(){
        setVisibility(true);    
    });
    
    $.viewOverlay.addEventListener('click',function(){
        setVisibility(false);    
    });
    
    $.listView.addEventListener('itemclick',function(event)
    {
        var selectedValue = listOptions[event.itemIndex];
        
        $.labelFieldText.text = selectedValue;
        currentValue = selectedValue;
        callback(currentValue);
        
        setVisibility(false);
    });
    
    $.viewDismissArrowHolder.addEventListener('click',function(){
        setVisibility(false);    
    });
    
    $.textFieldSearch.addEventListener('change',function(event){
        $.listView.searchText = event.value;    
    });
};

$.getSelectedValue = function() 
{
    return currentValue;
};

$.setSelectedValue = function(value)
{
    currentValue = value;
    $.labelFieldText.text = value;
};

$.setVisibility = setVisibility;