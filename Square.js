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

var Square = function(context, settings)
{
    this.context = context;
    
    this.settings = 
    {
        width: 0 || settings.width,
        height: 0 || settings.height,
        x: 0 || settings.x,
        y: 0 || settings.y,
        fill: settings.fill || false,
        fill_opacity: settings.fill_opacity || 1,
        stroke: settings.stroke || false,
        stroke_width: settings.stroke_width || 1,
        stroke_opacity: settings.stroke_opacity || 1,
        opacity: settings.opacity || 100
    };
    
    this.context.beginPath();
    this.context.fillRect(this.getX(),this.getY(),this.getWidth(), this.getHeight());
    
};

Circle.prototype = {
    constructor: Square,
    
    getWidth: function(){
        return this.settings.width;
    },
    
    setWidth: function(width){
        this.settings.width = width;
    },
    
    getHeight: function(){
        return this.settings.height;
    },
    
    setHeight: function(height){
        this.settings.height = height;
    },
    
    
    getX: function(){
        return this.settings.x;
    },
    
    setX: function(x){
        this.settings.x = x;
    },
    
    getY: function(){
        return this.settings.y;
    },
            
    setY: function(y){
        this.settings.y = y;
    },
    
    getFill: function(){
        return this.settings.fill;
    },
    
    setFill: function(fill){
        this.settings.fill = fill;
    },
    
    getFillOpacity: function(){
        return this.settings.fill_opacity;
    },
    
    setFillOpacity: function(fill_opacity){
        this.settings.fill_opacity = fill_opacity;
    },
            
    getStroke: function(){
        return this.settings.stroke;
    },
    
    setStroke: function(stroke){
        this.settings.stroke = stroke;
    },
            
    getStrokeOpacity: function(){
        return this.settings.stroke_opacity;
    },
    
    setStrokeOpacity: function(stroke_opacity){
        this.settings.stroke_opacity = stroke_opacity;
    },
            
    getOpacity: function(){
        return this.settings.opacity;
    },
    
    setOpacity: function(opacity){
        this.settings.opacity = opacity;
    },
            
    getStrokeWidth: function(){
        return this.settings.stroke_width;
    },
    
    setStrokeWidth: function(stroke_width){
        this.settings.stroke_width = stroke_width;
    }
};

