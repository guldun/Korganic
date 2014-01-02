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

function Square(context, settings){

    Square.call(this, context, settings);

};

inheritPrototype(Square, Entity);

Square.prototype.draw = function () 
{
    
    this.context.beginPath();
    this.context.rect(this.getX(),this.getY(),this.getWidth(), this.getHeight());

    //If fill is set or stroke is set
    if(this.getFill() !== false)
    {    
        this.context.fillStyle = "rgba(" + hexToRgb(this.getFill()).r + ", " + hexToRgb(this.getFill()).g + ", " + hexToRgb(this.getFill()).b + ", " + this.getFillOpacity() + ")";
        this.context.fill();
    }
    if(this.getStroke !== false)
    {
        this.context.strokeStyle = "rgba(" + hexToRgb(this.getStroke()).r + ", " + hexToRgb(this.getStroke()).g + ", " + hexToRgb(this.getStroke()).b + ", " + this.getStrokeOpacity() + ")";
        this.context.lineWidth = this.getStrokeWidth();
        this.context.stroke();
    }

    this.context.closePath();

};
