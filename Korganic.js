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

var Korganic = function(){

this.fps = 50;
this.width = 800;
this.height = 600;
this.canvas;
this.context;

};
Korganic.prototype = {
    constructor: Korganic,
    
    Korganic: function(width, height, fps){
        if(width !== 'undefined')
        {
            this.setWidth(width);
        
        }
        else
        {
            console.log("Korganic: Error: Width is Undefined");
        }
        if(height !== 'undefined') 
        {
            this.setHeight(height);
        }
        else
        {
            console.log("Korganic: Error: Height is Undefined");
        }
        if(fps !== 'undefined') 
        {
            this.setFPS(fps);
        }
        else
        {
            console.log("Korganic: Error: FPS is Undefined");
        }
        
        
    },
            
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
    }
};