// Base Javascript file for my practice!
Ext.BLANK_IMAGE_URL = './s.gif';

Ext.onReady(function(){
  var myDiv = Ext.get('myDiv');
  // console.log("Highlight", myDiv.highlight());
  console.log("AddClass", myDiv.addCls('red'));
  // console.log("Center", myDiv.center());
  // console.log("Opacity", myDiv.setOpacity(.25));

  console.log(Ext.select('p'));
  // Ext.select('p').highlight();
  Ext.select('p.myClass').highlight();
  
  var list = Ext.DomHelper.append('myDiv', {
    tag: 'ul', cls: 'my-list', children:
    [
      {tag: 'li', id:'item0', html: 'List Item 0'},
      {tag: 'li', id:'item1', html: 'List Item 1'},
      {tag: 'li', id:'item2', html: 'List Item 2'},
      {tag: 'li', id:'item3', html: 'List Item 3'},
      {tag: 'li', id:'item4', html: 'List Item 4'}
    ]
  });

  var html = '<a id="{id}" href="{url}" class="nav">{text}</a>';

  var tpl = Ext.DomHelper.createTemplate(html);
  tpl.append('myDiv', {
    id: 'link1',
    url: "#",
    text: "Jack's Site"
  });

  tpl.append("myDiv", {
    id: 'link2',
    url: '#',
    text: "Dustin's Site"
  });

  // var myPanel = new Ext.Panel({
  //   width: 400,
  //   height: 200,
  //   dockedItems: [{
  //       xtype: 'toolbar'
  //   }]
  // });

  // var myPanel2 = new Ext.Panel({
  //   title: 'Results',
  //   width: 600,
  //   height: 400,
  //   renderTo: 'myDiv',
  //   layout: {
  //       type: 'vbox', // Arrange child items vertically
  //       align: 'stretch', // Each takes up full width
  //       padding: 5
  //   },
  //   items: [{ // Results grid specified as a config object with an xtype of 'grid'
  //       xtype: 'grid',
  //       columns: [{
  //           header: 'Column One'
  //       }], // One header just for show. There's no data,
  //       store: Ext.create('Ext.data.ArrayStore', {}), // A dummy empty data store
  //       flex: 1 // Use 1/3 of Container's height (hint to Box layout)
  //   }, {
  //       xtype: 'splitter' // A splitter between the two child items
  //   }, { // Details Panel specified as a config object (no xtype defaults to 'panel').
  //       title: 'Details',
  //       bodyPadding: 5,
  //       items: [{
  //           fieldLabel: 'Data item',
  //           xtype: 'textfield'
  //       }], // An array of form fields
  //       flex: 2 // Use 2/3 of Container's height (hint to Box layout)
  //   }],
  //   listeners: {
  //       resize: function(panel, w, h) {
  //           alert('Panel resized to ' + w + 'x' + h);
  //       }
  //   },
  // });
  
  var myButton = Ext.get('myButton');
  myButton.on({
    'click': function() {
      console.log("Click");
    },
    'mouseover': function() {
      console.log("Mouseover");
    },
    'mouseout': function() {
      console.log("mouseout");
    },
    scope: {}
  });
  

  console.log("Congratulations!  You have Ext configured correctly!");
}); //end onReady
