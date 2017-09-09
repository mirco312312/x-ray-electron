const Nightmare = require("nightmare");

function driver(options?, fn?) {
    if ("function" == typeof options) fn = options, options = {};
    options = options || {};
    fn = fn || navigate;

    const nightmare = new Nightmare(options);

    return (ctx: any, done: Function) => {
        // console.log("going to: ", ctx.url);
   
        fn(ctx, nightmare)
            // execute javascript on the page, result will be passed to promise
            .evaluate(() => {
                return document.documentElement.outerHTML;
            })    
            // end the Nightmare instance along with the Electron instance it wraps
            .end() 
            // handle promise result
            .then(body => {
                // console.log(`got response from ${ctx.url}, content length: ${body.length}`);
                ctx.body = body;
                done(null, ctx);
            })
            // or error
            .catch(err => {
                // console.log(`nightmare error: ${err}`);
                done(err, ctx);
            });
    }
}

function navigate(ctx, nightmare) {
    return nightmare.goto(ctx.url);
}

export = {
    XrayElectron: driver
}