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
        
        this.context.translate( object.getX()+object.getWidth()/2, object.getY()+object.getHeight()/2 );
        // rotate the rect
        this.context.rotate(degrees*Math.PI/180);

        // draw the rect on the transformed context
        // Note: after transforming [0,0] is visually [x,y]
        //       so the rect needs to be offset accordingly when drawn
        object.setX(-object.getWidth()/2);
        object.setY(-object.getHeight()/2);

        object.draw();
    }
};