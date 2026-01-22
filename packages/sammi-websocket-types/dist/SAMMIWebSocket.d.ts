export = SAMMIWebSocket;
declare class SAMMIWebSocket extends Socket {
    /**
     * Generic Socket request method. Returns a promise.
     * Generates a messageId internally and will override any passed in the args.
     * Note that the requestType here is pre-marshaling and currently must match exactly what the websocket plugin is expecting.
     *
     * @param  {String}   requestType sammi-websocket plugin expected request type.
     * @param  {Object}   [arg={}]        request arguments.
     * @return {Promise}              Promise, passes the plugin response object.
     */
    send(requestType: string, args?: {}): Promise<any>;
}
import Socket = require("./Socket");
