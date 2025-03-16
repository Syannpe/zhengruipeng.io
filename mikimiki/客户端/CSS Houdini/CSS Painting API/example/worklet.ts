//@ts-ignore
registerPaint('boxbg', class {
    static get contextOptions():object { return {alpha: true}; }

    /*
       use this function to retrieve any custom properties (or regular properties, such as 'height')
       defined for the element, return them in the specified array
    */
    static get inputProperties():string[] { return ['--boxColor', '--widthSubtractor']; }
    //@ts-ignore
    paint(ctx:PaintRenderingContext2D, size:PaintSize, props:StylePropertyMapReadOnly):undefined {
        /*
           ctx -> drawing context
           size -> paintSize: width and height
           props -> properties: get() method
        */
        // console.log(size)
        ctx.fillStyle = props.get('--boxColor');
        ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--widthSubtractor'), size.height*0.6);
    }
});
