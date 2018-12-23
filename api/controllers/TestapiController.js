/**
 * TestapiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    list:function(req,res){
        var ping = require('ping');
        var mxToolkit = require("mxtoolkit");
        var apiKey = '06acf4b9-f181-403c-962f-4d104602b804'
        var urls=req.body.input;
        var host=urls;
     ping.sys.probe(host, function(isAlive){
    var blacklistss;
    var results;
    if(isAlive){
        results=host + ' is alive';
    }else{
        results=host + ' is dead';
    }
    mxToolkit.blacklist(urls,apiKey,function(resp) {
        blacklistss=JSON.stringify(resp);
    return res.view('list', { result: results, blacklistresults: blacklistss});
}); 
 });
}

}
    
     