$(function() {
	var slider = new MasterSlider();
    slider.setup('masterslider' , {
            width:1200,    // slider standard width
            height:350,   // slider standard height
            space:5,
            autoplay: true,
            loop: true,
            fullwidth:true,
            autoHeight:true,
            view:"scale",
            autoplay: true,
            // layout: "fullscreen",
            fillMode: "fill",
            layersMode: "center"
            // more slider options goes here...
        });
    // adds Arrows navigation control to the slider.
    slider.control('arrows');
    MSScrollParallax.setup(slider,50,80,true);

    /* side slider */
    var slider1 = new MasterSlider();
    slider1.setup('sideslider' , {
            width:1200,    // slider standard width
            height:350,   // slider standard height
            autoplay: true,
            loop: true,
            fullwidth:true,
            autoHeight:true,
            view:"stack",
            autoplay: true,
            layout: "boxed",
            fillMode: "fill",
            layersMode: "center"
            // more slider options goes here...
        });
    // adds Arrows navigation control to the slider.
    slider1.control('arrows');
	});