// Base Javascript file for my practice!
Ext.BLANK_IMAGE_URL = '../ext-4.2.1.883/docs/extjs/resources/themes/images/default/tree/s.gif';

Ext.onReady(function(){

  // // Grab the div for use within this onReady funciton
  // var myDiv = Ext.get('myDiv');

  // // manipulate the div
  // // console.log("Highlight", myDiv.highlight());
  // console.log("AddClass", myDiv.addCls('red'));
  // // console.log("Center", myDiv.center());
  // // console.log("Opacity", myDiv.setOpacity(.25));


  // // Selection practice
  // console.log(Ext.select('p'));
  // // Ext.select('p').highlight();
  // Ext.select('p.myClass').highlight();


  // // Dom manipulation, creating an unordered list
  // var list = Ext.DomHelper.append('myDiv', {
  //   tag: 'ul', cls: 'my-list', children:
  //   [
  //     {tag: 'li', id:'item0', html: 'List Item 0'},
  //     {tag: 'li', id:'item1', html: 'List Item 1'},
  //     {tag: 'li', id:'item2', html: 'List Item 2'},
  //     {tag: 'li', id:'item3', html: 'List Item 3'},
  //     {tag: 'li', id:'item4', html: 'List Item 4'}
  //   ]
  // });

  // // create the html for a template we can use later
  // var html = '<a id="{id}" href="{url}" class="nav">{text}</a>';

  // // Use the template to create actual elements added to the div
  // var tpl = Ext.DomHelper.createTemplate(html);
  // tpl.append('myDiv', {
  //   id: 'link1',
  //   url: "#",
  //   text: "Jack's Site"
  // });

  // tpl.append("myDiv", {
  //   id: 'link2',
  //   url: '#',
  //   text: "Dustin's Site"
  // });


  // // couldn't get this to work.. I'm missing something about how to get the panel
  // // fully initialized
  // // var myPanel = new Ext.Panel({
  // //   width: 400,
  // //   height: 200,
  // //   dockedItems: [{
  // //       xtype: 'toolbar'
  // //   }]
  // // });


  // // Fully funcitoning panel... Not resizeable yet. Thats is a work in progress
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
  //           console.warn('Panel resized to ' + w + 'x' + h);
  //       }
  //   },
  // });
  

  // // Creating event listeners for the button
  // var myButton = Ext.get('myButton');
  // myButton.on({
  //   'click': function() {
  //     console.log("Click");
  //   },
  //   'mouseover': function() {
  //     console.log("Mouseover");
  //   },
  //   'mouseout': function() {
  //     console.log("mouseout");
  //   },
  //   scope: {}
  // });

  // // grabbing the Ext element from the paragraph, and making a message to the
  // // user when the paragraph is clicked on
  // var myParagraph = Ext.get(Ext.select('p.myClass').elements[0]);
  // myParagraph.highlight();
  // myParagraph.on({
  //   'click': function() {
  //     Ext.MessageBox.show({
  //       title: 'Paragraph clicked',
  //       msg: myParagraph.dom.innerHTML,
  //       width: 500,
  //       buttons: Ext.MessageBox.OK,
  //       animEl: myParagraph
  //     });
  //   }
  // });


  // // Creating a grid panel. Here we create the data store that will be inserted
  // // into the grid panel later.
  // Ext.create('Ext.data.Store', {
  //   storeId: "TestStore",
  //   fields: ["company", "price", "change","pctChange","lastChange"],
  //   data: {"items": [
  //       {"company": "Apple", "price": 29.89, "change": 0.24, "pctChange": 0.81,"lastChange": "9/1 12:00am"},
  //       {"company": "Ext", "price": 83.81, "change": 0.72, "pctChange": 0.34,"lastChange": "9/12 12:00am"},
  //       {"company": "Google", "price": 71.72, "change": 0.98, "pctChange": 0.03,"lastChange": "10/1 12:00am"},
  //       {"company": "Microsoft", "price": 52.55, "change": 0.99, "pctChange": 0.02,"lastChange": "7/4 12:00am"},
  //       {"company": "Yahoo!", "price": 29.01, "change": 0.58, "pctChange": 1.47,"lastChange": "5/22 12:00am"}
  //     ]}, 
  //   proxy: {
  //     type: "memory",
  //     reader: {
  //       type: "json",
  //       root: "items"
  //     }
  //   }
  // });
  // // create the grid panel, and link the data
  // Ext.create("Ext.grid.Panel", {
  //   title: "Test",
  //   store: Ext.data.StoreManager.lookup("TestStore"),
  //   columns: [
  //     {header: "Company", width: 120, sortable: true, dataIndex: "company"},
  //     {header: "Price", width: 90, sortable: true, dataIndex: "price"},
  //     {header: "Change", width: 90, sortable: true, dataIndex: "change"},
  //     {header: "% Change", width: 90, sortable: true, dataIndex: "pctChange"},
  //     {header: "Last Updated", width: 120, sortable: true,
  //     renderer: Ext.util.Format.dateRenderer("m/d/Y"),
  //     dataIndex: "lastChange"}
  //   ],
  //   height: 180,
  //   width: 512,
  //   renderTo: "myDiv"    
  // });


  // // Tabbed panel!
  // var panel = new Ext.TabPanel({
  //   width: 200,
  //   height: 200,
  //   activeItem: 0, // index or id
  //   items:[{
  //       title: 'Tab 1',
  //       html: 'This is tab 1 content.'
  //   },{
  //       title: 'Tab 2',
  //       html: 'This is tab 2 content.'
  //   },{
  //       title: 'Tab 3',
  //       html: 'This is tab 3 content.'
  //   }]
  // });
  // panel.render('myDiv');


  // Viewport... Overrides the panels, so we keep it commened out, or we comment
  // out the panels. Reminds me of my old school LMS.... Brainhoney.... full of
  // EXT.js....
  new Ext.Viewport({
    layout: 'border',
    items: [{
      region: 'north',
      html: '<h1 class="x-panel-header">Page Title</h1>',
      autoHeight: true,
      border: false,
      margins: '0 0 5 0'
    }, {
      region: 'west',
      collapsible: true,
      title: 'Navigation',
      width: 200,
      autoScroll: true,
      split: true,
      html: 'this is the west region'
    }, {
      region: 'center',
      html: 'this is center region'
    }, {
      region: 'south',
      title: 'Information',
      collapsible: true,
      html: 'Information goes here',
      split: true,
      height: 100,
      minHeight: 100
    }]
  });


  console.log("Congratulations!  You have Ext configured correctly!");
}); //end onReady
