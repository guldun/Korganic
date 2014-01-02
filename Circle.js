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

function Circle(context, settings){

    Entity.call(this, context, settings);

};

inheritPrototype(Circle, Entity);

Circle.prototype.draw = function () 
{
    
    //Draw Elipse or Circle
    var kappa = .5522848,

    x = this.getX(),
    y = this.getY(),        
    ox = (this.getWidth() / 2) * kappa, // control point offset horizontal
    oy = (this.getHeight() / 2) * kappa, // control point offset vertical
    xe = this.getX() + this.getWidth(),           // x-end
    ye = this.getY() + this.getHeight(),           // y-end
    xm = this.getX() + this.getWidth() / 2,       // x-middle
    ym = this.getY() + this.getHeight() / 2;       // y-middle

    this.context.beginPath();
    this.context.moveTo(this.getX(), ym);

    this.context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    this.context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    this.context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    this.context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

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
