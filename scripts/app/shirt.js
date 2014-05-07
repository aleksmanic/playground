define(["./cart","./inventory"], function (cart, inventory){
  return{
    color:"black",
    type:"fit slim",
    addToCart:function(){
      inventory.decrement(this);
      cart.add(this);
    }
  }
});

//Modules that define globals are explicitly discouraged, so that multiple versions of a module can exist in a page at a time (see Advanced Usage).
//The return object from the function call defines the "my/shirt" module. By defining modules in this way, "my/shirt" does not exist as a global object.
