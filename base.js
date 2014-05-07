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

  var myParagraph = Ext.get(Ext.select('p.myClass').elements[0]);
  myParagraph.highlight();
  myParagraph.on({
    'click': function() {
      Ext.MessageBox.show({
        title: 'Paragraph clicked',
        msg: myParagraph.dom.innerHTML,
        width: 500,
        buttons: Ext.MessageBox.OK,
        animEl: myParagraph
      });
    }
  });


  Ext.create('Ext.data.Store', {
    storeId: "TestStore",
    fields: ["company", "price", "change","pctChange","lastChange"],
    data: {"items": [
        {"company": "Apple", "price": 29.89, "change": 0.24, "pctChange": 0.81,"lastChange": "9/1 12:00am"},
        {"company": "Ext", "price": 83.81, "change": 0.72, "pctChange": 0.34,"lastChange": "9/12 12:00am"},
        {"company": "Google", "price": 71.72, "change": 0.98, "pctChange": 0.03,"lastChange": "10/1 12:00am"},
        {"company": "Microsoft", "price": 52.55, "change": 0.99, "pctChange": 0.02,"lastChange": "7/4 12:00am"},
        {"company": "Yahoo!", "price": 29.01, "change": 0.58, "pctChange": 1.47,"lastChange": "5/22 12:00am"}
      ]}, 
    proxy: {
      type: "memory",
      reader: {
        type: "json",
        root: "items"
      }
    }
  });

  Ext.create("Ext.grid.Panel", {
    title: "Test",
    store: Ext.data.StoreManager.lookup("TestStore"),
    columns: [
      {header: "Company", width: 120, sortable: true, dataIndex: "company"},
      {header: "Price", width: 90, sortable: true, dataIndex: "price"},
      {header: "Change", width: 90, sortable: true, dataIndex: "change"},
      {header: "% Change", width: 90, sortable: true, dataIndex: "pctChange"},
      {header: "Last Updated", width: 120, sortable: true,
      renderer: Ext.util.Format.dateRenderer("m/d/Y"),
      dataIndex: "lastChange"}
    ],
    height: 180,
    width: 512,
    renderTo: "myDiv"    
  });

  console.log("Congratulations!  You have Ext configured correctly!");
}); //end onReady
