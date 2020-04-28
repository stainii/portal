/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

const df = require("durable-functions");
const FileReader = require("./FileReader");

module.exports = df.orchestrator(function*(context){
    context.log("Starting chain sample");

    const file = FileReader.readFile(context.df.getInput());
    console.log("ok!");
    const output = [];
    output.push(yield context.df.callActivity("thumbnail", {
        data: file.data,
        width: 200,
        height: 200,
        crop: true}
    ));
    return output;
});