/* 
 * Korganic
 * 
 * By Joshua Lawson - SphyrixNetworks
 * 
 * ----------------
 * 
 * HTML5 Animation software built for use with KGE (Koron Game Engine) for building
 * 2D Animations and Menus for games built with KGE. For information about KGE 
 * please visit http://www.kge.com.au for information about Korganic visit 
 * http://kge.com.au/tools/korganic or for any information about the author of 
 * either of the mentioned software please visit http://joshualawson.com.au or
 * http://sphyrix.net
 * 
 * ----------------
 * 
 * e-mail: josh@sphyrix.net
 * twitter: jlawson1988
 * 
 * ----------------
 * This software is licensed under the MIT License
 */

var Korganic = function(width, height, fps)
{

    this.fps = 50;
    this.width = 800;
    this.height = 600;
    this.canvas;
    this.context;

    if(width !== 'undefined')
    {
        this.setWidth(width);
    }
    else
    {
        console.log("Korganic: Error: Width is Undefined");
        return 1;
    }
    if(height !== 'undefined') 
    {
        this.setHeight(height);
    }
    else
    {
        console.log("Korganic: Error: Height is Undefined");
        return 1;
    }
    if(fps !== 'undefined') 
    {
        this.setFPS(fps);
    }
    else
    {
        console.log("Korganic: Error: FPS is Undefined");
        return 1;
    }

    //Create the canvas
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'viewport';
    document.getElementById('Korganic').appendChild(this.canvas);

    //Set the Canvas width and height
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    //Create the context
    this.context = document.getElementById("viewport").getContext("2d");

};

Korganic.prototype = {
    constructor: Korganic,
                
    init: function(){
        
    },
            
    getFPS: function(){
        return this.fps;
    },
            
    setFPS: function(fps){
        this.fps = fps;
    },
    
    getHeight: function(){
        return this.height;
    },
            
    setHeight: function(height){
        this.height = height;
    },
    
    getWidth: function(){
        return this.width;
    },
            
    setWidth: function(width){
        this.width = width;
    },
    
    getCanvas: function(){
        return this.canvas;
    },
    
    setCanvas: function(canvas){
        this.canvas = canvas;
    },
    
    getContext: function(){
        return this.context;
    },
    
    setContext: function(context){
        this.context = context;
    },
            
    rotate: function(object, degrees){
        
        object.setRotation(degrees);
        object.draw();
    },
            
    gradient: function(object, settings)
    {
        //Get Center of Object
        var centerX = object.getWidth() / 2;
        var centerY = object.getHeight() /2;
        
        var adj = centerX;
        var angle = settings.degrees;
                
        //Get points X2, Y2
        var x1 = object.getX() + object.getWidth();
        var y1 = object.getY() + object.getHeight();
        
        var grd = object.getContext().createLinearGradient(object.getX(),object.getY(),x1,y1);
        grd.addColorStop(0, settings.color1);
        grd.addColorStop(1, settings.color2);

        sq.getContext().fillStyle = grd;
        sq.getContext().fill();
    },
            
    circle: function(settings){
        return new Circle(this.context, settings);
    },
    
    square: function(settings)
    {
        return new Square(this.context, settings);
    },
            
    line: function(settings)
    {
        return new Line(this.context, settings);
    }
};