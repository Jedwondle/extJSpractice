// Base Javascript file for my practice!
Ext.BLANK_IMAGE_URL = './s.gif';

Ext.onReady(function(){
  var myDiv = Ext.get('myDiv');
  // console.log("Highlight", myDiv.highlight());
  console.log("AddClass", myDiv.addCls('red'));
  console.log("Center", myDiv.center());
  console.log("Opacity", myDiv.setOpacity(.25));

  console.log(Ext.select('p'));
  // Ext.select('p').highlight();
  Ext.select('p.myClass').highlight();
  
  console.log("Congratulations!  You have Ext configured correctly!");
}); //end onReady
