export = Socket;
declare class Socket extends EventEmitter {
    _connected: boolean;
    _socket: any;
    connect(args: any): Promise<any>;
    /**
     * Opens a WebSocket connection to an sammi-websocket server, but does not attempt any authentication.
     *
     * @param {String} address url without ws:// or wss:// prefix.
     * @param {Boolean} secure whether to us ws:// or wss://
     * @returns {Promise}
     * @private
     * @return {Promise} on attempted creation of WebSocket connection.
     */
    private _connect;
    /**
     * Authenticates to an sammi-websocket server. Must already have an active connection before calling this method.
     *
     * @param {String} [name=''] name of the client.
     * @param {String} [password=''] authentication string.
     * @private
     * @return {Promise} on resolution of authentication call.
     */
    private _authenticate;
    /**
     * Close and disconnect the WebSocket connection.
     *
     * @function
     * @category request
     */
    disconnect(): void;
}
import EventEmitter = require("events");
