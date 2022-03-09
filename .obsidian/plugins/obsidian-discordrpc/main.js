'use strict';

var require$$0 = require('electron');
var EventEmitter = require('events');
var require$$0$1 = require('timers');
var net = require('net');
var obsidian = require('obsidian');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var net__default = /*#__PURE__*/_interopDefaultLegacy(net);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
});

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

let register;
try {
  const { app } = require$$0__default['default'];
  register = app.setAsDefaultProtocolClient.bind(app);
} catch (err) {
  try {
    register = require$$1;
  } catch (e) {} // eslint-disable-line no-empty
}

if (typeof register !== 'function') {
  register = () => false;
}

function pid() {
  if (typeof process !== 'undefined') {
    return process.pid;
  }
  return null;
}

const uuid4122 = () => {
  let uuid = '';
  for (let i = 0; i < 32; i += 1) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    let n;
    if (i === 12) {
      n = 4;
    } else {
      const random = Math.random() * 16 | 0;
      if (i === 16) {
        n = (random & 3) | 0;
      } else {
        n = random;
      }
    }
    uuid += n.toString(16);
  }
  return uuid;
};

var util = {
  pid,
  register,
  uuid: uuid4122,
};

var browser$2 = createCommonjsModule(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
};

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
});

const { uuid: uuid$1 } = util;

const OPCodes = {
  HANDSHAKE: 0,
  FRAME: 1,
  CLOSE: 2,
  PING: 3,
  PONG: 4,
};

function getIPCPath(id) {
  if (process.platform === 'win32') {
    return `\\\\?\\pipe\\discord-ipc-${id}`;
  }
  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
}

function getIPC(id = 0) {
  return new Promise((resolve, reject) => {
    const path = getIPCPath(id);
    const onerror = () => {
      if (id < 10) {
        resolve(getIPC(id + 1));
      } else {
        reject(new Error('Could not connect'));
      }
    };
    const sock = net__default['default'].createConnection(path, () => {
      sock.removeListener('error', onerror);
      resolve(sock);
    });
    sock.once('error', onerror);
  });
}

async function findEndpoint(tries = 0) {
  if (tries > 30) {
    throw new Error('Could not find endpoint');
  }
  const endpoint = `http://127.0.0.1:${6463 + (tries % 10)}`;
  try {
    const r = await browser$2(endpoint);
    if (r.status === 404) {
      return endpoint;
    }
    return findEndpoint(tries + 1);
  } catch (e) {
    return findEndpoint(tries + 1);
  }
}

function encode(op, data) {
  data = JSON.stringify(data);
  const len = Buffer.byteLength(data);
  const packet = Buffer.alloc(8 + len);
  packet.writeInt32LE(op, 0);
  packet.writeInt32LE(len, 4);
  packet.write(data, 8, len);
  return packet;
}

const working = {
  full: '',
  op: undefined,
};

function decode(socket, callback) {
  const packet = socket.read();
  if (!packet) {
    return;
  }

  let { op } = working;
  let raw;
  if (working.full === '') {
    op = working.op = packet.readInt32LE(0);
    const len = packet.readInt32LE(4);
    raw = packet.slice(8, len + 8);
  } else {
    raw = packet.toString();
  }

  try {
    const data = JSON.parse(working.full + raw);
    callback({ op, data }); // eslint-disable-line callback-return
    working.full = '';
    working.op = undefined;
  } catch (err) {
    working.full += raw;
  }

  decode(socket, callback);
}

class IPCTransport extends EventEmitter__default['default'] {
  constructor(client) {
    super();
    this.client = client;
    this.socket = null;
  }

  async connect() {
    const socket = this.socket = await getIPC();
    socket.on('close', this.onClose.bind(this));
    socket.on('error', this.onClose.bind(this));
    this.emit('open');
    socket.write(encode(OPCodes.HANDSHAKE, {
      v: 1,
      client_id: this.client.clientId,
    }));
    socket.pause();
    socket.on('readable', () => {
      decode(socket, ({ op, data }) => {
        switch (op) {
          case OPCodes.PING:
            this.send(data, OPCodes.PONG);
            break;
          case OPCodes.FRAME:
            if (!data) {
              return;
            }
            if (data.cmd === 'AUTHORIZE' && data.evt !== 'ERROR') {
              findEndpoint()
                .then((endpoint) => {
                  this.client.request.endpoint = endpoint;
                })
                .catch((e) => {
                  this.client.emit('error', e);
                });
            }
            this.emit('message', data);
            break;
          case OPCodes.CLOSE:
            this.emit('close', data);
            break;
          default:
            break;
        }
      });
    });
  }

  onClose(e) {
    this.emit('close', e);
  }

  send(data, op = OPCodes.FRAME) {
    this.socket.write(encode(op, data));
  }

  async close() {
    return new Promise((r) => {
      this.once('close', r);
      this.send({}, OPCodes.CLOSE);
      this.socket.end();
    });
  }

  ping() {
    this.send(uuid$1(), OPCodes.PING);
  }
}

var ipc = IPCTransport;
var encode_1 = encode;
var decode_1 = decode;
ipc.encode = encode_1;
ipc.decode = decode_1;

function keyMirror(arr) {
  const tmp = {};
  for (const value of arr) {
    tmp[value] = value;
  }
  return tmp;
}


var browser$1 = typeof window !== 'undefined';

var RPCCommands$1 = keyMirror([
  'DISPATCH',
  'AUTHORIZE',
  'AUTHENTICATE',
  'GET_GUILD',
  'GET_GUILDS',
  'GET_CHANNEL',
  'GET_CHANNELS',
  'CREATE_CHANNEL_INVITE',
  'GET_RELATIONSHIPS',
  'GET_USER',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'SET_USER_VOICE_SETTINGS',
  'SET_USER_VOICE_SETTINGS_2',
  'SELECT_VOICE_CHANNEL',
  'GET_SELECTED_VOICE_CHANNEL',
  'SELECT_TEXT_CHANNEL',
  'GET_VOICE_SETTINGS',
  'SET_VOICE_SETTINGS_2',
  'SET_VOICE_SETTINGS',
  'CAPTURE_SHORTCUT',
  'SET_ACTIVITY',
  'SEND_ACTIVITY_JOIN_INVITE',
  'CLOSE_ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_INVITE_USER',
  'ACCEPT_ACTIVITY_INVITE',
  'INVITE_BROWSER',
  'DEEP_LINK',
  'CONNECTIONS_CALLBACK',
  'BRAINTREE_POPUP_BRIDGE_CALLBACK',
  'GIFT_CODE_BROWSER',
  'GUILD_TEMPLATE_BROWSER',
  'OVERLAY',
  'BROWSER_HANDOFF',
  'SET_CERTIFIED_DEVICES',
  'GET_IMAGE',
  'CREATE_LOBBY',
  'UPDATE_LOBBY',
  'DELETE_LOBBY',
  'UPDATE_LOBBY_MEMBER',
  'CONNECT_TO_LOBBY',
  'DISCONNECT_FROM_LOBBY',
  'SEND_TO_LOBBY',
  'SEARCH_LOBBIES',
  'CONNECT_TO_LOBBY_VOICE',
  'DISCONNECT_FROM_LOBBY_VOICE',
  'SET_OVERLAY_LOCKED',
  'OPEN_OVERLAY_ACTIVITY_INVITE',
  'OPEN_OVERLAY_GUILD_INVITE',
  'OPEN_OVERLAY_VOICE_SETTINGS',
  'VALIDATE_APPLICATION',
  'GET_ENTITLEMENT_TICKET',
  'GET_APPLICATION_TICKET',
  'START_PURCHASE',
  'GET_SKUS',
  'GET_ENTITLEMENTS',
  'GET_NETWORKING_CONFIG',
  'NETWORKING_SYSTEM_METRICS',
  'NETWORKING_PEER_METRICS',
  'NETWORKING_CREATE_TOKEN',
  'SET_USER_ACHIEVEMENT',
  'GET_USER_ACHIEVEMENTS',
]);

var RPCEvents$1 = keyMirror([
  'CURRENT_USER_UPDATE',
  'GUILD_STATUS',
  'GUILD_CREATE',
  'CHANNEL_CREATE',
  'RELATIONSHIP_UPDATE',
  'VOICE_CHANNEL_SELECT',
  'VOICE_STATE_CREATE',
  'VOICE_STATE_DELETE',
  'VOICE_STATE_UPDATE',
  'VOICE_SETTINGS_UPDATE',
  'VOICE_SETTINGS_UPDATE_2',
  'VOICE_CONNECTION_STATUS',
  'SPEAKING_START',
  'SPEAKING_STOP',
  'GAME_JOIN',
  'GAME_SPECTATE',
  'ACTIVITY_JOIN',
  'ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_SPECTATE',
  'ACTIVITY_INVITE',
  'NOTIFICATION_CREATE',
  'MESSAGE_CREATE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE',
  'LOBBY_DELETE',
  'LOBBY_UPDATE',
  'LOBBY_MEMBER_CONNECT',
  'LOBBY_MEMBER_DISCONNECT',
  'LOBBY_MEMBER_UPDATE',
  'LOBBY_MESSAGE',
  'CAPTURE_SHORTCUT_CHANGE',
  'OVERLAY',
  'OVERLAY_UPDATE',
  'ENTITLEMENT_CREATE',
  'ENTITLEMENT_DELETE',
  'USER_ACHIEVEMENT_UPDATE',
  'READY',
  'ERROR',
]);

var RPCErrors = {
  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
  GET_GUILD_TIMED_OUT: 5002,
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  INVALID_ACTIVITY_SECRET: 5005,
  INVALID_CHANNEL: 4005,
  INVALID_CLIENTID: 4007,
  INVALID_COMMAND: 4002,
  INVALID_ENTITLEMENT: 4015,
  INVALID_EVENT: 4004,
  INVALID_GIFT_CODE: 4016,
  INVALID_GUILD: 4003,
  INVALID_INVITE: 4011,
  INVALID_LOBBY: 4013,
  INVALID_LOBBY_SECRET: 4014,
  INVALID_ORIGIN: 4008,
  INVALID_PAYLOAD: 4000,
  INVALID_PERMISSIONS: 4006,
  INVALID_TOKEN: 4009,
  INVALID_USER: 4010,
  LOBBY_FULL: 5007,
  NO_ELIGIBLE_ACTIVITY: 5006,
  OAUTH2_ERROR: 5000,
  PURCHASE_CANCELED: 5008,
  PURCHASE_ERROR: 5009,
  RATE_LIMITED: 5011,
  SELECT_CHANNEL_TIMED_OUT: 5001,
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  SERVICE_UNAVAILABLE: 1001,
  TRANSACTION_ABORTED: 1002,
  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
  UNKNOWN_ERROR: 1000,
};

var RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  CLOSE_UNSUPPORTED: 1003,
  CLOSE_ABNORMAL: 1006,
  INVALID_CLIENTID: 4000,
  INVALID_ORIGIN: 4001,
  RATELIMITED: 4002,
  TOKEN_REVOKED: 4003,
  INVALID_VERSION: 4004,
  INVALID_ENCODING: 4005,
};

var LobbyTypes = {
  PRIVATE: 1,
  PUBLIC: 2,
};

var RelationshipTypes$1 = {
  NONE: 0,
  FRIEND: 1,
  BLOCKED: 2,
  PENDING_INCOMING: 3,
  PENDING_OUTGOING: 4,
  IMPLICIT: 5,
};

var constants = {
	browser: browser$1,
	RPCCommands: RPCCommands$1,
	RPCEvents: RPCEvents$1,
	RPCErrors: RPCErrors,
	RPCCloseCodes: RPCCloseCodes,
	LobbyTypes: LobbyTypes,
	RelationshipTypes: RelationshipTypes$1
};

const { browser } = constants;

// eslint-disable-next-line
const WebSocket = browser ? window.WebSocket : require$$1;

const pack = (d) => JSON.stringify(d);
const unpack = (s) => JSON.parse(s);

class WebSocketTransport extends EventEmitter__default['default'] {
  constructor(client) {
    super();
    this.client = client;
    this.ws = null;
    this.tries = 0;
  }

  async connect() {
    const port = 6463 + (this.tries % 10);
    this.tries += 1;

    this.ws = new WebSocket(
      `ws://127.0.0.1:${port}/?v=1&client_id=${this.client.clientId}`,
      browser ? undefined : { origin: this.client.options.origin },
    );
    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
    this.ws.onmessage = this.onMessage.bind(this);
  }

  onOpen() {
    this.emit('open');
  }

  onClose(event) {
    if (!event.wasClean) {
      return;
    }
    this.emit('close', event);
  }

  onError(event) {
    try {
      this.ws.close();
    } catch {} // eslint-disable-line no-empty

    if (this.tries > 20) {
      this.emit('error', event.error);
    } else {
      setTimeout(() => {
        this.connect();
      }, 250);
    }
  }

  onMessage(event) {
    this.emit('message', unpack(event.data));
  }

  send(data) {
    this.ws.send(pack(data));
  }

  ping() {} // eslint-disable-line no-empty-function

  close() {
    return new Promise((r) => {
      this.once('close', r);
      this.ws.close();
    });
  }
}

var websocket = WebSocketTransport;

var transports = {
  ipc: ipc,
  websocket: websocket,
};

const { setTimeout: setTimeout$1, clearTimeout } = require$$0__default$1['default'];


const { RPCCommands, RPCEvents, RelationshipTypes } = constants;
const { pid: getPid, uuid } = util;

function subKey(event, args) {
  return `${event}${JSON.stringify(args)}`;
}

/**
 * @typedef {RPCClientOptions}
 * @extends {ClientOptions}
 * @prop {string} transport RPC transport. one of `ipc` or `websocket`
 */

/**
 * The main hub for interacting with Discord RPC
 * @extends {BaseClient}
 */
class RPCClient extends EventEmitter__default['default'] {
  /**
   * @param {RPCClientOptions} [options] Options for the client.
   * You must provide a transport
   */
  constructor(options = {}) {
    super();

    this.options = options;

    this.accessToken = null;
    this.clientId = null;

    /**
     * Application used in this client
     * @type {?ClientApplication}
     */
    this.application = null;

    /**
     * User used in this application
     * @type {?User}
     */
    this.user = null;

    const Transport = transports[options.transport];
    if (!Transport) {
      throw new TypeError('RPC_INVALID_TRANSPORT', options.transport);
    }

    this.fetch = (method, path, { data, query } = {}) =>
      browser$2(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ''}`, {
        method,
        body: data,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }).then(async (r) => {
        const body = await r.json();
        if (!r.ok) {
          const e = new Error(r.status);
          e.body = body;
          throw e;
        }
        return body;
      });

    this.fetch.endpoint = 'https://discord.com/api';

    /**
     * Raw transport userd
     * @type {RPCTransport}
     * @private
     */
    this.transport = new Transport(this);
    this.transport.on('message', this._onRpcMessage.bind(this));

    /**
     * Map of nonces being expected from the transport
     * @type {Map}
     * @private
     */
    this._expecting = new Map();

    /**
     * Map of current subscriptions
     * @type {Map}
     * @private
     */
    this._subscriptions = new Map();

    this._connectPromise = undefined;
  }

  /**
   * Search and connect to RPC
   */
  connect(clientId) {
    if (this._connectPromise) {
      return this._connectPromise;
    }
    this._connectPromise = new Promise((resolve, reject) => {
      this.clientId = clientId;
      const timeout = setTimeout$1(() => reject(new Error('RPC_CONNECTION_TIMEOUT')), 10e3);
      timeout.unref();
      this.once('connected', () => {
        clearTimeout(timeout);
        resolve(this);
      });
      this.transport.once('close', () => {
        this._expecting.forEach((e) => {
          e.reject(new Error('connection closed'));
        });
        this.emit('disconnected');
        reject(new Error('connection closed'));
      });
      this.transport.connect().catch(reject);
    });
    return this._connectPromise;
  }

  /**
   * @typedef {RPCLoginOptions}
   * @param {string} clientId Client ID
   * @param {string} [clientSecret] Client secret
   * @param {string} [accessToken] Access token
   * @param {string} [rpcToken] RPC token
   * @param {string} [tokenEndpoint] Token endpoint
   * @param {string[]} [scopes] Scopes to authorize with
   */

  /**
   * Performs authentication flow. Automatically calls Client#connect if needed.
   * @param {RPCLoginOptions} options Options for authentication.
   * At least one property must be provided to perform login.
   * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
   * @returns {Promise<RPCClient>}
   */
  async login(options = {}) {
    let { clientId, accessToken } = options;
    await this.connect(clientId);
    if (!options.scopes) {
      this.emit('ready');
      return this;
    }
    if (!accessToken) {
      accessToken = await this.authorize(options);
    }
    return this.authenticate(accessToken);
  }

  /**
   * Request
   * @param {string} cmd Command
   * @param {Object} [args={}] Arguments
   * @param {string} [evt] Event
   * @returns {Promise}
   * @private
   */
  request(cmd, args, evt) {
    return new Promise((resolve, reject) => {
      const nonce = uuid();
      this.transport.send({ cmd, args, evt, nonce });
      this._expecting.set(nonce, { resolve, reject });
    });
  }

  /**
   * Message handler
   * @param {Object} message message
   * @private
   */
  _onRpcMessage(message) {
    if (message.cmd === RPCCommands.DISPATCH && message.evt === RPCEvents.READY) {
      if (message.data.user) {
        this.user = message.data.user;
      }
      this.emit('connected');
    } else if (this._expecting.has(message.nonce)) {
      const { resolve, reject } = this._expecting.get(message.nonce);
      if (message.evt === 'ERROR') {
        const e = new Error(message.data.message);
        e.code = message.data.code;
        e.data = message.data;
        reject(e);
      } else {
        resolve(message.data);
      }
      this._expecting.delete(message.nonce);
    } else {
      const subid = subKey(message.evt, message.args);
      if (!this._subscriptions.has(subid)) {
        return;
      }
      this._subscriptions.get(subid)(message.data);
    }
  }

  /**
   * Authorize
   * @param {Object} options options
   * @returns {Promise}
   * @private
   */
  async authorize({ scopes, clientSecret, rpcToken, redirectUri } = {}) {
    if (clientSecret && rpcToken === true) {
      const body = await this.fetch('POST', '/oauth2/token/rpc', {
        data: new URLSearchParams({
          client_id: this.clientId,
          client_secret: clientSecret,
        }),
      });
      rpcToken = body.rpc_token;
    }

    const { code } = await this.request('AUTHORIZE', {
      scopes,
      client_id: this.clientId,
      rpc_token: rpcToken,
    });

    const response = await this.fetch('POST', '/oauth2/token', {
      data: new URLSearchParams({
        client_id: this.clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    return response.access_token;
  }

  /**
   * Authenticate
   * @param {string} accessToken access token
   * @returns {Promise}
   * @private
   */
  authenticate(accessToken) {
    return this.request('AUTHENTICATE', { access_token: accessToken })
      .then(({ application, user }) => {
        this.accessToken = accessToken;
        this.application = application;
        this.user = user;
        this.emit('ready');
        return this;
      });
  }


  /**
   * Fetch a guild
   * @param {Snowflake} id Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Guild>}
   */
  getGuild(id, timeout) {
    return this.request(RPCCommands.GET_GUILD, { guild_id: id, timeout });
  }

  /**
   * Fetch all guilds
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Guild>>}
   */
  getGuilds(timeout) {
    return this.request(RPCCommands.GET_GUILDS, { timeout });
  }

  /**
   * Get a channel
   * @param {Snowflake} id Channel ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Channel>}
   */
  getChannel(id, timeout) {
    return this.request(RPCCommands.GET_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get all channels
   * @param {Snowflake} [id] Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Channel>>}
   */
  async getChannels(id, timeout) {
    const { channels } = await this.request(RPCCommands.GET_CHANNELS, {
      timeout,
      guild_id: id,
    });
    return channels;
  }

  /**
   * @typedef {CertifiedDevice}
   * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
   * @prop {string} uuid This device's Windows UUID
   * @prop {object} vendor Vendor information
   * @prop {string} vendor.name Vendor's name
   * @prop {string} vendor.url Vendor's url
   * @prop {object} model Model information
   * @prop {string} model.name Model's name
   * @prop {string} model.url Model's url
   * @prop {string[]} related Array of related product's Windows UUIDs
   * @prop {boolean} echoCancellation If the device has echo cancellation
   * @prop {boolean} noiseSuppression If the device has noise suppression
   * @prop {boolean} automaticGainControl If the device has automatic gain control
   * @prop {boolean} hardwareMute If the device has a hardware mute
   */

  /**
   * Tell discord which devices are certified
   * @param {CertifiedDevice[]} devices Certified devices to send to discord
   * @returns {Promise}
   */
  setCertifiedDevices(devices) {
    return this.request(RPCCommands.SET_CERTIFIED_DEVICES, {
      devices: devices.map((d) => ({
        type: d.type,
        id: d.uuid,
        vendor: d.vendor,
        model: d.model,
        related: d.related,
        echo_cancellation: d.echoCancellation,
        noise_suppression: d.noiseSuppression,
        automatic_gain_control: d.automaticGainControl,
        hardware_mute: d.hardwareMute,
      })),
    });
  }

  /**
   * @typedef {UserVoiceSettings}
   * @prop {Snowflake} id ID of the user these settings apply to
   * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
   * 0.0 and 1.0, inclusive
   * @prop {?number} [volume=100] The volume
   * @prop {bool} [mute] If the user is muted
   */

  /**
   * Set the voice settings for a user, by id
   * @param {Snowflake} id ID of the user to set
   * @param {UserVoiceSettings} settings Settings
   * @returns {Promise}
   */
  setUserVoiceSettings(id, settings) {
    return this.request(RPCCommands.SET_USER_VOICE_SETTINGS, {
      user_id: id,
      pan: settings.pan,
      mute: settings.mute,
      volume: settings.volume,
    });
  }

  /**
   * Move the user to a voice channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectVoiceChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Move the user to a text channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectTextChannel(id, { timeout } = {}) {
    return this.request(RPCCommands.SELECT_TEXT_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get current voice settings
   * @returns {Promise}
   */
  getVoiceSettings() {
    return this.request(RPCCommands.GET_VOICE_SETTINGS)
      .then((s) => ({
        automaticGainControl: s.automatic_gain_control,
        echoCancellation: s.echo_cancellation,
        noiseSuppression: s.noise_suppression,
        qos: s.qos,
        silenceWarning: s.silence_warning,
        deaf: s.deaf,
        mute: s.mute,
        input: {
          availableDevices: s.input.available_devices,
          device: s.input.device_id,
          volume: s.input.volume,
        },
        output: {
          availableDevices: s.output.available_devices,
          device: s.output.device_id,
          volume: s.output.volume,
        },
        mode: {
          type: s.mode.type,
          autoThreshold: s.mode.auto_threshold,
          threshold: s.mode.threshold,
          shortcut: s.mode.shortcut,
          delay: s.mode.delay,
        },
      }));
  }

  /**
   * Set current voice settings, overriding the current settings until this session disconnects.
   * This also locks the settings for any other rpc sessions which may be connected.
   * @param {Object} args Settings
   * @returns {Promise}
   */
  setVoiceSettings(args) {
    return this.request(RPCCommands.SET_VOICE_SETTINGS, {
      automatic_gain_control: args.automaticGainControl,
      echo_cancellation: args.echoCancellation,
      noise_suppression: args.noiseSuppression,
      qos: args.qos,
      silence_warning: args.silenceWarning,
      deaf: args.deaf,
      mute: args.mute,
      input: args.input ? {
        device_id: args.input.device,
        volume: args.input.volume,
      } : undefined,
      output: args.output ? {
        device_id: args.output.device,
        volume: args.output.volume,
      } : undefined,
      mode: args.mode ? {
        mode: args.mode.type,
        auto_threshold: args.mode.autoThreshold,
        threshold: args.mode.threshold,
        shortcut: args.mode.shortcut,
        delay: args.mode.delay,
      } : undefined,
    });
  }

  /**
   * Capture a shortcut using the client
   * The callback takes (key, stop) where `stop` is a function that will stop capturing.
   * This `stop` function must be called before disconnecting or else the user will have
   * to restart their client.
   * @param {Function} callback Callback handling keys
   * @returns {Promise<Function>}
   */
  captureShortcut(callback) {
    const subid = subKey(RPCEvents.CAPTURE_SHORTCUT_CHANGE);
    const stop = () => {
      this._subscriptions.delete(subid);
      return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'STOP' });
    };
    this._subscriptions.set(subid, ({ shortcut }) => {
      callback(shortcut, stop);
    });
    return this.request(RPCCommands.CAPTURE_SHORTCUT, { action: 'START' })
      .then(() => stop);
  }

  /**
   * Sets the presence for the logged in user.
   * @param {object} args The rich presence to pass.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  setActivity(args = {}, pid = getPid()) {
    let timestamps;
    let assets;
    let party;
    let secrets;
    if (args.startTimestamp || args.endTimestamp) {
      timestamps = {
        start: args.startTimestamp,
        end: args.endTimestamp,
      };
      if (timestamps.start instanceof Date) {
        timestamps.start = Math.round(timestamps.start.getTime());
      }
      if (timestamps.end instanceof Date) {
        timestamps.end = Math.round(timestamps.end.getTime());
      }
      if (timestamps.start > 2147483647000) {
        throw new RangeError('timestamps.start must fit into a unix timestamp');
      }
      if (timestamps.end > 2147483647000) {
        throw new RangeError('timestamps.end must fit into a unix timestamp');
      }
    }
    if (
      args.largeImageKey || args.largeImageText
      || args.smallImageKey || args.smallImageText
    ) {
      assets = {
        large_image: args.largeImageKey,
        large_text: args.largeImageText,
        small_image: args.smallImageKey,
        small_text: args.smallImageText,
      };
    }
    if (args.partySize || args.partyId || args.partyMax) {
      party = { id: args.partyId };
      if (args.partySize || args.partyMax) {
        party.size = [args.partySize, args.partyMax];
      }
    }
    if (args.matchSecret || args.joinSecret || args.spectateSecret) {
      secrets = {
        match: args.matchSecret,
        join: args.joinSecret,
        spectate: args.spectateSecret,
      };
    }

    return this.request(RPCCommands.SET_ACTIVITY, {
      pid,
      activity: {
        state: args.state,
        details: args.details,
        timestamps,
        assets,
        party,
        secrets,
        buttons: args.buttons,
        instance: !!args.instance,
      },
    });
  }

  /**
   * Clears the currently set presence, if any. This will hide the "Playing X" message
   * displayed below the user's name.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  clearActivity(pid = getPid()) {
    return this.request(RPCCommands.SET_ACTIVITY, {
      pid,
    });
  }

  /**
   * Invite a user to join the game the RPC user is currently playing
   * @param {User} user The user to invite
   * @returns {Promise}
   */
  sendJoinInvite(user) {
    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_INVITE, {
      user_id: user.id || user,
    });
  }

  /**
   * Request to join the game the user is playing
   * @param {User} user The user whose game you want to request to join
   * @returns {Promise}
   */
  sendJoinRequest(user) {
    return this.request(RPCCommands.SEND_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  /**
   * Reject a join request from a user
   * @param {User} user The user whose request you wish to reject
   * @returns {Promise}
   */
  closeJoinRequest(user) {
    return this.request(RPCCommands.CLOSE_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  createLobby(type, capacity, metadata) {
    return this.request(RPCCommands.CREATE_LOBBY, {
      type,
      capacity,
      metadata,
    });
  }

  updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
    return this.request(RPCCommands.UPDATE_LOBBY, {
      id: lobby.id || lobby,
      type,
      owner_id: (owner && owner.id) || owner,
      capacity,
      metadata,
    });
  }

  deleteLobby(lobby) {
    return this.request(RPCCommands.DELETE_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  connectToLobby(id, secret) {
    return this.request(RPCCommands.CONNECT_TO_LOBBY, {
      id,
      secret,
    });
  }

  sendToLobby(lobby, data) {
    return this.request(RPCCommands.SEND_TO_LOBBY, {
      id: lobby.id || lobby,
      data,
    });
  }

  disconnectFromLobby(lobby) {
    return this.request(RPCCommands.DISCONNECT_FROM_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  updateLobbyMember(lobby, user, metadata) {
    return this.request(RPCCommands.UPDATE_LOBBY_MEMBER, {
      lobby_id: lobby.id || lobby,
      user_id: user.id || user,
      metadata,
    });
  }

  getRelationships() {
    const types = Object.keys(RelationshipTypes);
    return this.request(RPCCommands.GET_RELATIONSHIPS)
      .then((o) => o.relationships.map((r) => ({
        ...r,
        type: types[r.type],
      })));
  }

  /**
   * Subscribe to an event
   * @param {string} event Name of event e.g. `MESSAGE_CREATE`
   * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
   * @param {Function} callback Callback when an event for the subscription is triggered
   * @returns {Promise<Object>}
   */
  subscribe(event, args, callback) {
    if (!callback && typeof args === 'function') {
      callback = args;
      args = undefined;
    }
    return this.request(RPCCommands.SUBSCRIBE, args, event).then(() => {
      const subid = subKey(event, args);
      this._subscriptions.set(subid, callback);
      return {
        unsubscribe: () => this.request(RPCCommands.UNSUBSCRIBE, args, event)
          .then(() => this._subscriptions.delete(subid)),
      };
    });
  }

  /**
   * Destroy the client
   */
  async destroy() {
    await this.transport.close();
  }
}

var client = RPCClient;

var src = {
  Client: client,
  register(id) {
    return util.register(`discord-${id}`);
  },
};

var Logger = /** @class */ (function () {
    function Logger() {
        this.plugin = this.plugin;
    }
    Logger.prototype.log = function (message, showPopups) {
        if (showPopups) {
            new obsidian.Notice(message);
        }
        console.log("discordrpc: " + message);
    };
    Logger.prototype.logIgnoreNoNotice = function (message) {
        new obsidian.Notice(message);
        console.log("discordrpc: " + message);
    };
    return Logger;
}());

var DiscordRPCSettings = /** @class */ (function () {
    function DiscordRPCSettings() {
        this.showVaultName = true;
        this.showCurrentFileName = true;
        this.showPopups = true;
        this.customVaultName = "";
        this.showFileExtension = false;
        this.useLoadedTime = false;
        this.connectOnStart = true;
        this.autoHideStatusBar = true;
    }
    return DiscordRPCSettings;
}());
var PluginState;
(function (PluginState) {
    PluginState[PluginState["connected"] = 0] = "connected";
    PluginState[PluginState["connecting"] = 1] = "connecting";
    PluginState[PluginState["disconnected"] = 2] = "disconnected";
})(PluginState || (PluginState = {}));

var DiscordRPCSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordRPCSettingsTab, _super);
    function DiscordRPCSettingsTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    DiscordRPCSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Discord Rich Presence Settings" });
        containerEl.createEl("h3", { text: "Vault Name Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Vault Name")
            .setDesc("Enable this to show the name of the vault you are working with.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showVaultName).onChange(function (value) {
                plugin.settings.showVaultName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Vault Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Vault Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Set Custom Vault Name")
            .setDesc("Change the vault name shown publicly. Leave blank to use your actual vault name.")
            .addText(function (text) {
            return text.setValue(plugin.settings.customVaultName).onChange(function (value) {
                plugin.settings.customVaultName = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "File Name Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Current File Name")
            .setDesc("Enable this to show the name of the file you are working on.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showCurrentFileName)
                .onChange(function (value) {
                plugin.settings.showCurrentFileName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("File Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("File Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show File Extension")
            .setDesc("Enable this to show file extension.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showFileExtension)
                .onChange(function (value) {
                plugin.settings.showFileExtension = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Time Settings" });
        new obsidian.Setting(containerEl)
            .setName("Use Obsidian Total Time")
            .setDesc("Enable to use the total time you have been using Obsidian, instead of the time spent editing a single file.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.useLoadedTime).onChange(function (value) {
                plugin.settings.useLoadedTime = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Status Bar Settings" });
        new obsidian.Setting(containerEl)
            .setName("Automatically hide Status Bar")
            .setDesc("Automatically hide status bar after successfully connecting to Discord.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.autoHideStatusBar).onChange(function (value) {
                plugin.settings.autoHideStatusBar = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Startup Settings" });
        new obsidian.Setting(containerEl)
            .setName("Automatically Connect to Discord")
            .setDesc("Automatically connect to Discord on startup. You can always click the status bar to manually connect.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.connectOnStart).onChange(function (value) {
                plugin.settings.connectOnStart = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Notice Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Notices")
            .setDesc("Enable this to show connection Notices.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showPopups).onChange(function (value) {
                plugin.settings.showPopups = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Notices Enabled");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Notices Disabled");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
    };
    return DiscordRPCSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl) {
        this.statusBarEl = statusBarEl;
    }
    StatusBar.prototype.displayState = function (state, autoHide) {
        switch (state) {
            case PluginState.connected:
                this.displayConnected(autoHide ? 10000 : 0);
                break;
            case PluginState.connecting:
                this.statusBarEl.setText("Connecting to Discord...");
                break;
            case PluginState.disconnected:
                this.statusBarEl.setText("\uD83D\uDDD8 Reconnect to Discord");
                break;
        }
    };
    StatusBar.prototype.displayConnected = function (timeout) {
        var _this = this;
        this.statusBarEl.setText("\uD83C\uDF0D Connected to Discord");
        if (timeout && timeout > 0) {
            window.setTimeout(function () {
                _this.statusBarEl.setText("");
            }, timeout);
        }
        else {
            window.setTimeout(function () {
                _this.statusBarEl.setText("\uD83C\uDF0D");
            }, 5000);
        }
    };
    return StatusBar;
}());

var ObsidianDiscordRPC = /** @class */ (function (_super) {
    __extends(ObsidianDiscordRPC, _super);
    function ObsidianDiscordRPC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    ObsidianDiscordRPC.prototype.setState = function (state) {
        this.state = state;
    };
    ObsidianDiscordRPC.prototype.getState = function () {
        return this.state;
    };
    ObsidianDiscordRPC.prototype.getApp = function () {
        return this.app;
    };
    ObsidianDiscordRPC.prototype.getPluginManifest = function () {
        return this.manifest;
    };
    ObsidianDiscordRPC.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl, _a, activeLeaf_1, files;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl);
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || new DiscordRPCSettings();
                        this.registerEvent(this.app.workspace.on("file-open", this.onFileOpen, this));
                        this.registerDomEvent(statusBarEl, "click", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.getState() == PluginState.disconnected)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.connectDiscord()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        if (!(this.getState() == PluginState.connected)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.disconnectDiscord()];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.addSettingTab(new DiscordRPCSettingsTab(this.app, this));
                        this.addCommand({
                            id: "reconnect-discord",
                            name: "Reconnect to Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.connectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        this.addCommand({
                            id: "disconnect-discord",
                            name: "Disconnect from Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.disconnectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        if (!this.settings.connectOnStart) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.connectDiscord()];
                    case 2:
                        _b.sent();
                        activeLeaf_1 = this.app.workspace.activeLeaf;
                        files = this.app.vault.getMarkdownFiles();
                        files.forEach(function (file) {
                            if (file.basename === activeLeaf_1.getDisplayText()) {
                                _this.onFileOpen(file);
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onFileOpen = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentFile = file;
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), file.basename, file.extension)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.rpc.clearActivity();
                        this.rpc.destroy();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.connectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadedTime = new Date();
                        this.rpc = new src.Client({
                            transport: "ipc",
                        });
                        this.setState(PluginState.connecting);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        this.rpc.once("ready", function () {
                            _this.setState(PluginState.connected);
                            _this.statusBar.displayState(_this.getState(), _this.settings.autoHideStatusBar);
                            _this.logger.log("Connected to Discord", _this.settings.showPopups);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rpc.login({
                                clientId: "763813185022197831",
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), "...", "")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a.sent();
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                        this.logger.log("Failed to connect to Discord", this.settings.showPopups);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.disconnectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.rpc.clearActivity();
                this.rpc.destroy();
                this.setState(PluginState.disconnected);
                this.statusBar.displayState(this.getState(), this.settings.autoHideStatusBar);
                this.logger.log("Disconnected from Discord", this.settings.showPopups);
                return [2 /*return*/];
            });
        });
    };
    ObsidianDiscordRPC.prototype.setActivity = function (vaultName, fileName, fileExtension) {
        return __awaiter(this, void 0, void 0, function () {
            var vault, file, date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 8];
                        vault = void 0;
                        if (this.settings.customVaultName === "") {
                            vault = vaultName;
                        }
                        else {
                            vault = this.settings.customVaultName;
                        }
                        file = void 0;
                        if (this.settings.showFileExtension) {
                            file = fileName + "." + fileExtension;
                        }
                        else {
                            file = fileName;
                        }
                        date = void 0;
                        if (this.settings.useLoadedTime) {
                            date = this.loadedTime;
                        }
                        else {
                            date = new Date();
                        }
                        if (!(this.settings.showVaultName && this.settings.showCurrentFileName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing " + file,
                                state: "Vault: " + vault,
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        if (!this.settings.showVaultName) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.setActivity({
                                state: "Vault: " + vault,
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!this.settings.showCurrentFileName) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing " + file,
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rpc.setActivity({
                            startTimestamp: date,
                            largeImageKey: "logo",
                            largeImageText: "Obsidian",
                        })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return ObsidianDiscordRPC;
}(obsidian.Plugin));

module.exports = ObsidianDiscordRPC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9kaXNjb3JkLXJwYy9zcmMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL2Jyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvaXBjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jbGllbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL2luZGV4LmpzIiwiLi4vc3JjL2xvZ2dlci50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy10YWIudHMiLCIuLi9zcmMvc3RhdHVzLWJhci50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XHJcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcclxuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcclxuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgZnJvbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCByZWdpc3RlcjtcbnRyeSB7XG4gIGNvbnN0IHsgYXBwIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xuICByZWdpc3RlciA9IGFwcC5zZXRBc0RlZmF1bHRQcm90b2NvbENsaWVudC5iaW5kKGFwcCk7XG59IGNhdGNoIChlcnIpIHtcbiAgdHJ5IHtcbiAgICByZWdpc3RlciA9IHJlcXVpcmUoJ3JlZ2lzdGVyLXNjaGVtZScpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG59XG5cbmlmICh0eXBlb2YgcmVnaXN0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgcmVnaXN0ZXIgPSAoKSA9PiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcGlkKCkge1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MucGlkO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCB1dWlkNDEyMiA9ICgpID0+IHtcbiAgbGV0IHV1aWQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSArPSAxKSB7XG4gICAgaWYgKGkgPT09IDggfHwgaSA9PT0gMTIgfHwgaSA9PT0gMTYgfHwgaSA9PT0gMjApIHtcbiAgICAgIHV1aWQgKz0gJy0nO1xuICAgIH1cbiAgICBsZXQgbjtcbiAgICBpZiAoaSA9PT0gMTIpIHtcbiAgICAgIG4gPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgaWYgKGkgPT09IDE2KSB7XG4gICAgICAgIG4gPSAocmFuZG9tICYgMykgfCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbiA9IHJhbmRvbTtcbiAgICAgIH1cbiAgICB9XG4gICAgdXVpZCArPSBuLnRvU3RyaW5nKDE2KTtcbiAgfVxuICByZXR1cm4gdXVpZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwaWQsXG4gIHJlZ2lzdGVyLFxuICB1dWlkOiB1dWlkNDEyMixcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmlmIChnbG9iYWwuZmV0Y2gpIHtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZ2xvYmFsLmZldGNoLmJpbmQoZ2xvYmFsKTtcbn1cblxuZXhwb3J0cy5IZWFkZXJzID0gZ2xvYmFsLkhlYWRlcnM7XG5leHBvcnRzLlJlcXVlc3QgPSBnbG9iYWwuUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBnbG9iYWwuUmVzcG9uc2U7IiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZXQgPSByZXF1aXJlKCduZXQnKTtcbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5jb25zdCB7IHV1aWQgfSA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxuY29uc3QgT1BDb2RlcyA9IHtcbiAgSEFORFNIQUtFOiAwLFxuICBGUkFNRTogMSxcbiAgQ0xPU0U6IDIsXG4gIFBJTkc6IDMsXG4gIFBPTkc6IDQsXG59O1xuXG5mdW5jdGlvbiBnZXRJUENQYXRoKGlkKSB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIGBcXFxcXFxcXD9cXFxccGlwZVxcXFxkaXNjb3JkLWlwYy0ke2lkfWA7XG4gIH1cbiAgY29uc3QgeyBlbnY6IHsgWERHX1JVTlRJTUVfRElSLCBUTVBESVIsIFRNUCwgVEVNUCB9IH0gPSBwcm9jZXNzO1xuICBjb25zdCBwcmVmaXggPSBYREdfUlVOVElNRV9ESVIgfHwgVE1QRElSIHx8IFRNUCB8fCBURU1QIHx8ICcvdG1wJztcbiAgcmV0dXJuIGAke3ByZWZpeC5yZXBsYWNlKC9cXC8kLywgJycpfS9kaXNjb3JkLWlwYy0ke2lkfWA7XG59XG5cbmZ1bmN0aW9uIGdldElQQyhpZCA9IDApIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBwYXRoID0gZ2V0SVBDUGF0aChpZCk7XG4gICAgY29uc3Qgb25lcnJvciA9ICgpID0+IHtcbiAgICAgIGlmIChpZCA8IDEwKSB7XG4gICAgICAgIHJlc29sdmUoZ2V0SVBDKGlkICsgMSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ291bGQgbm90IGNvbm5lY3QnKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzb2NrID0gbmV0LmNyZWF0ZUNvbm5lY3Rpb24ocGF0aCwgKCkgPT4ge1xuICAgICAgc29jay5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgIHJlc29sdmUoc29jayk7XG4gICAgfSk7XG4gICAgc29jay5vbmNlKCdlcnJvcicsIG9uZXJyb3IpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZEVuZHBvaW50KHRyaWVzID0gMCkge1xuICBpZiAodHJpZXMgPiAzMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZW5kcG9pbnQnKTtcbiAgfVxuICBjb25zdCBlbmRwb2ludCA9IGBodHRwOi8vMTI3LjAuMC4xOiR7NjQ2MyArICh0cmllcyAlIDEwKX1gO1xuICB0cnkge1xuICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG4gICAgaWYgKHIuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgIHJldHVybiBlbmRwb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmRFbmRwb2ludCh0cmllcyArIDEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZpbmRFbmRwb2ludCh0cmllcyArIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZShvcCwgZGF0YSkge1xuICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIGNvbnN0IGxlbiA9IEJ1ZmZlci5ieXRlTGVuZ3RoKGRhdGEpO1xuICBjb25zdCBwYWNrZXQgPSBCdWZmZXIuYWxsb2MoOCArIGxlbik7XG4gIHBhY2tldC53cml0ZUludDMyTEUob3AsIDApO1xuICBwYWNrZXQud3JpdGVJbnQzMkxFKGxlbiwgNCk7XG4gIHBhY2tldC53cml0ZShkYXRhLCA4LCBsZW4pO1xuICByZXR1cm4gcGFja2V0O1xufVxuXG5jb25zdCB3b3JraW5nID0ge1xuICBmdWxsOiAnJyxcbiAgb3A6IHVuZGVmaW5lZCxcbn07XG5cbmZ1bmN0aW9uIGRlY29kZShzb2NrZXQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHBhY2tldCA9IHNvY2tldC5yZWFkKCk7XG4gIGlmICghcGFja2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHsgb3AgfSA9IHdvcmtpbmc7XG4gIGxldCByYXc7XG4gIGlmICh3b3JraW5nLmZ1bGwgPT09ICcnKSB7XG4gICAgb3AgPSB3b3JraW5nLm9wID0gcGFja2V0LnJlYWRJbnQzMkxFKDApO1xuICAgIGNvbnN0IGxlbiA9IHBhY2tldC5yZWFkSW50MzJMRSg0KTtcbiAgICByYXcgPSBwYWNrZXQuc2xpY2UoOCwgbGVuICsgOCk7XG4gIH0gZWxzZSB7XG4gICAgcmF3ID0gcGFja2V0LnRvU3RyaW5nKCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHdvcmtpbmcuZnVsbCArIHJhdyk7XG4gICAgY2FsbGJhY2soeyBvcCwgZGF0YSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYWxsYmFjay1yZXR1cm5cbiAgICB3b3JraW5nLmZ1bGwgPSAnJztcbiAgICB3b3JraW5nLm9wID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB3b3JraW5nLmZ1bGwgKz0gcmF3O1xuICB9XG5cbiAgZGVjb2RlKHNvY2tldCwgY2FsbGJhY2spO1xufVxuXG5jbGFzcyBJUENUcmFuc3BvcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgY29uc3Qgc29ja2V0ID0gdGhpcy5zb2NrZXQgPSBhd2FpdCBnZXRJUEMoKTtcbiAgICBzb2NrZXQub24oJ2Nsb3NlJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcykpO1xuICAgIHNvY2tldC5vbignZXJyb3InLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gICAgc29ja2V0LndyaXRlKGVuY29kZShPUENvZGVzLkhBTkRTSEFLRSwge1xuICAgICAgdjogMSxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnQuY2xpZW50SWQsXG4gICAgfSkpO1xuICAgIHNvY2tldC5wYXVzZSgpO1xuICAgIHNvY2tldC5vbigncmVhZGFibGUnLCAoKSA9PiB7XG4gICAgICBkZWNvZGUoc29ja2V0LCAoeyBvcCwgZGF0YSB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAob3ApIHtcbiAgICAgICAgICBjYXNlIE9QQ29kZXMuUElORzpcbiAgICAgICAgICAgIHRoaXMuc2VuZChkYXRhLCBPUENvZGVzLlBPTkcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLkZSQU1FOlxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmNtZCA9PT0gJ0FVVEhPUklaRScgJiYgZGF0YS5ldnQgIT09ICdFUlJPUicpIHtcbiAgICAgICAgICAgICAgZmluZEVuZHBvaW50KClcbiAgICAgICAgICAgICAgICAudGhlbigoZW5kcG9pbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LnJlcXVlc3QuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnQuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPUENvZGVzLkNMT1NFOlxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjbG9zZScsIGRhdGEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xvc2UoZSkge1xuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCBlKTtcbiAgfVxuXG4gIHNlbmQoZGF0YSwgb3AgPSBPUENvZGVzLkZSQU1FKSB7XG4gICAgdGhpcy5zb2NrZXQud3JpdGUoZW5jb2RlKG9wLCBkYXRhKSk7XG4gIH1cblxuICBhc3luYyBjbG9zZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCByKTtcbiAgICAgIHRoaXMuc2VuZCh7fSwgT1BDb2Rlcy5DTE9TRSk7XG4gICAgICB0aGlzLnNvY2tldC5lbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBpbmcoKSB7XG4gICAgdGhpcy5zZW5kKHV1aWQoKSwgT1BDb2Rlcy5QSU5HKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElQQ1RyYW5zcG9ydDtcbm1vZHVsZS5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24ga2V5TWlycm9yKGFycikge1xuICBjb25zdCB0bXAgPSB7fTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnIpIHtcbiAgICB0bXBbdmFsdWVdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRtcDtcbn1cblxuXG5leHBvcnRzLmJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0cy5SUENDb21tYW5kcyA9IGtleU1pcnJvcihbXG4gICdESVNQQVRDSCcsXG4gICdBVVRIT1JJWkUnLFxuICAnQVVUSEVOVElDQVRFJyxcbiAgJ0dFVF9HVUlMRCcsXG4gICdHRVRfR1VJTERTJyxcbiAgJ0dFVF9DSEFOTkVMJyxcbiAgJ0dFVF9DSEFOTkVMUycsXG4gICdDUkVBVEVfQ0hBTk5FTF9JTlZJVEUnLFxuICAnR0VUX1JFTEFUSU9OU0hJUFMnLFxuICAnR0VUX1VTRVInLFxuICAnU1VCU0NSSUJFJyxcbiAgJ1VOU1VCU0NSSUJFJyxcbiAgJ1NFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ1NFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTXzInLFxuICAnU0VMRUNUX1ZPSUNFX0NIQU5ORUwnLFxuICAnR0VUX1NFTEVDVEVEX1ZPSUNFX0NIQU5ORUwnLFxuICAnU0VMRUNUX1RFWFRfQ0hBTk5FTCcsXG4gICdHRVRfVk9JQ0VfU0VUVElOR1MnLFxuICAnU0VUX1ZPSUNFX1NFVFRJTkdTXzInLFxuICAnU0VUX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ0NBUFRVUkVfU0hPUlRDVVQnLFxuICAnU0VUX0FDVElWSVRZJyxcbiAgJ1NFTkRfQUNUSVZJVFlfSk9JTl9JTlZJVEUnLFxuICAnQ0xPU0VfQUNUSVZJVFlfSk9JTl9SRVFVRVNUJyxcbiAgJ0FDVElWSVRZX0lOVklURV9VU0VSJyxcbiAgJ0FDQ0VQVF9BQ1RJVklUWV9JTlZJVEUnLFxuICAnSU5WSVRFX0JST1dTRVInLFxuICAnREVFUF9MSU5LJyxcbiAgJ0NPTk5FQ1RJT05TX0NBTExCQUNLJyxcbiAgJ0JSQUlOVFJFRV9QT1BVUF9CUklER0VfQ0FMTEJBQ0snLFxuICAnR0lGVF9DT0RFX0JST1dTRVInLFxuICAnR1VJTERfVEVNUExBVEVfQlJPV1NFUicsXG4gICdPVkVSTEFZJyxcbiAgJ0JST1dTRVJfSEFORE9GRicsXG4gICdTRVRfQ0VSVElGSUVEX0RFVklDRVMnLFxuICAnR0VUX0lNQUdFJyxcbiAgJ0NSRUFURV9MT0JCWScsXG4gICdVUERBVEVfTE9CQlknLFxuICAnREVMRVRFX0xPQkJZJyxcbiAgJ1VQREFURV9MT0JCWV9NRU1CRVInLFxuICAnQ09OTkVDVF9UT19MT0JCWScsXG4gICdESVNDT05ORUNUX0ZST01fTE9CQlknLFxuICAnU0VORF9UT19MT0JCWScsXG4gICdTRUFSQ0hfTE9CQklFUycsXG4gICdDT05ORUNUX1RPX0xPQkJZX1ZPSUNFJyxcbiAgJ0RJU0NPTk5FQ1RfRlJPTV9MT0JCWV9WT0lDRScsXG4gICdTRVRfT1ZFUkxBWV9MT0NLRUQnLFxuICAnT1BFTl9PVkVSTEFZX0FDVElWSVRZX0lOVklURScsXG4gICdPUEVOX09WRVJMQVlfR1VJTERfSU5WSVRFJyxcbiAgJ09QRU5fT1ZFUkxBWV9WT0lDRV9TRVRUSU5HUycsXG4gICdWQUxJREFURV9BUFBMSUNBVElPTicsXG4gICdHRVRfRU5USVRMRU1FTlRfVElDS0VUJyxcbiAgJ0dFVF9BUFBMSUNBVElPTl9USUNLRVQnLFxuICAnU1RBUlRfUFVSQ0hBU0UnLFxuICAnR0VUX1NLVVMnLFxuICAnR0VUX0VOVElUTEVNRU5UUycsXG4gICdHRVRfTkVUV09SS0lOR19DT05GSUcnLFxuICAnTkVUV09SS0lOR19TWVNURU1fTUVUUklDUycsXG4gICdORVRXT1JLSU5HX1BFRVJfTUVUUklDUycsXG4gICdORVRXT1JLSU5HX0NSRUFURV9UT0tFTicsXG4gICdTRVRfVVNFUl9BQ0hJRVZFTUVOVCcsXG4gICdHRVRfVVNFUl9BQ0hJRVZFTUVOVFMnLFxuXSk7XG5cbmV4cG9ydHMuUlBDRXZlbnRzID0ga2V5TWlycm9yKFtcbiAgJ0NVUlJFTlRfVVNFUl9VUERBVEUnLFxuICAnR1VJTERfU1RBVFVTJyxcbiAgJ0dVSUxEX0NSRUFURScsXG4gICdDSEFOTkVMX0NSRUFURScsXG4gICdSRUxBVElPTlNISVBfVVBEQVRFJyxcbiAgJ1ZPSUNFX0NIQU5ORUxfU0VMRUNUJyxcbiAgJ1ZPSUNFX1NUQVRFX0NSRUFURScsXG4gICdWT0lDRV9TVEFURV9ERUxFVEUnLFxuICAnVk9JQ0VfU1RBVEVfVVBEQVRFJyxcbiAgJ1ZPSUNFX1NFVFRJTkdTX1VQREFURScsXG4gICdWT0lDRV9TRVRUSU5HU19VUERBVEVfMicsXG4gICdWT0lDRV9DT05ORUNUSU9OX1NUQVRVUycsXG4gICdTUEVBS0lOR19TVEFSVCcsXG4gICdTUEVBS0lOR19TVE9QJyxcbiAgJ0dBTUVfSk9JTicsXG4gICdHQU1FX1NQRUNUQVRFJyxcbiAgJ0FDVElWSVRZX0pPSU4nLFxuICAnQUNUSVZJVFlfSk9JTl9SRVFVRVNUJyxcbiAgJ0FDVElWSVRZX1NQRUNUQVRFJyxcbiAgJ0FDVElWSVRZX0lOVklURScsXG4gICdOT1RJRklDQVRJT05fQ1JFQVRFJyxcbiAgJ01FU1NBR0VfQ1JFQVRFJyxcbiAgJ01FU1NBR0VfVVBEQVRFJyxcbiAgJ01FU1NBR0VfREVMRVRFJyxcbiAgJ0xPQkJZX0RFTEVURScsXG4gICdMT0JCWV9VUERBVEUnLFxuICAnTE9CQllfTUVNQkVSX0NPTk5FQ1QnLFxuICAnTE9CQllfTUVNQkVSX0RJU0NPTk5FQ1QnLFxuICAnTE9CQllfTUVNQkVSX1VQREFURScsXG4gICdMT0JCWV9NRVNTQUdFJyxcbiAgJ0NBUFRVUkVfU0hPUlRDVVRfQ0hBTkdFJyxcbiAgJ09WRVJMQVknLFxuICAnT1ZFUkxBWV9VUERBVEUnLFxuICAnRU5USVRMRU1FTlRfQ1JFQVRFJyxcbiAgJ0VOVElUTEVNRU5UX0RFTEVURScsXG4gICdVU0VSX0FDSElFVkVNRU5UX1VQREFURScsXG4gICdSRUFEWScsXG4gICdFUlJPUicsXG5dKTtcblxuZXhwb3J0cy5SUENFcnJvcnMgPSB7XG4gIENBUFRVUkVfU0hPUlRDVVRfQUxSRUFEWV9MSVNURU5JTkc6IDUwMDQsXG4gIEdFVF9HVUlMRF9USU1FRF9PVVQ6IDUwMDIsXG4gIElOVkFMSURfQUNUSVZJVFlfSk9JTl9SRVFVRVNUOiA0MDEyLFxuICBJTlZBTElEX0FDVElWSVRZX1NFQ1JFVDogNTAwNSxcbiAgSU5WQUxJRF9DSEFOTkVMOiA0MDA1LFxuICBJTlZBTElEX0NMSUVOVElEOiA0MDA3LFxuICBJTlZBTElEX0NPTU1BTkQ6IDQwMDIsXG4gIElOVkFMSURfRU5USVRMRU1FTlQ6IDQwMTUsXG4gIElOVkFMSURfRVZFTlQ6IDQwMDQsXG4gIElOVkFMSURfR0lGVF9DT0RFOiA0MDE2LFxuICBJTlZBTElEX0dVSUxEOiA0MDAzLFxuICBJTlZBTElEX0lOVklURTogNDAxMSxcbiAgSU5WQUxJRF9MT0JCWTogNDAxMyxcbiAgSU5WQUxJRF9MT0JCWV9TRUNSRVQ6IDQwMTQsXG4gIElOVkFMSURfT1JJR0lOOiA0MDA4LFxuICBJTlZBTElEX1BBWUxPQUQ6IDQwMDAsXG4gIElOVkFMSURfUEVSTUlTU0lPTlM6IDQwMDYsXG4gIElOVkFMSURfVE9LRU46IDQwMDksXG4gIElOVkFMSURfVVNFUjogNDAxMCxcbiAgTE9CQllfRlVMTDogNTAwNyxcbiAgTk9fRUxJR0lCTEVfQUNUSVZJVFk6IDUwMDYsXG4gIE9BVVRIMl9FUlJPUjogNTAwMCxcbiAgUFVSQ0hBU0VfQ0FOQ0VMRUQ6IDUwMDgsXG4gIFBVUkNIQVNFX0VSUk9SOiA1MDA5LFxuICBSQVRFX0xJTUlURUQ6IDUwMTEsXG4gIFNFTEVDVF9DSEFOTkVMX1RJTUVEX09VVDogNTAwMSxcbiAgU0VMRUNUX1ZPSUNFX0ZPUkNFX1JFUVVJUkVEOiA1MDAzLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiAxMDAxLFxuICBUUkFOU0FDVElPTl9BQk9SVEVEOiAxMDAyLFxuICBVTkFVVEhPUklaRURfRk9SX0FDSElFVkVNRU5UOiA1MDEwLFxuICBVTktOT1dOX0VSUk9SOiAxMDAwLFxufTtcblxuZXhwb3J0cy5SUENDbG9zZUNvZGVzID0ge1xuICBDTE9TRV9OT1JNQUw6IDEwMDAsXG4gIENMT1NFX1VOU1VQUE9SVEVEOiAxMDAzLFxuICBDTE9TRV9BQk5PUk1BTDogMTAwNixcbiAgSU5WQUxJRF9DTElFTlRJRDogNDAwMCxcbiAgSU5WQUxJRF9PUklHSU46IDQwMDEsXG4gIFJBVEVMSU1JVEVEOiA0MDAyLFxuICBUT0tFTl9SRVZPS0VEOiA0MDAzLFxuICBJTlZBTElEX1ZFUlNJT046IDQwMDQsXG4gIElOVkFMSURfRU5DT0RJTkc6IDQwMDUsXG59O1xuXG5leHBvcnRzLkxvYmJ5VHlwZXMgPSB7XG4gIFBSSVZBVEU6IDEsXG4gIFBVQkxJQzogMixcbn07XG5cbmV4cG9ydHMuUmVsYXRpb25zaGlwVHlwZXMgPSB7XG4gIE5PTkU6IDAsXG4gIEZSSUVORDogMSxcbiAgQkxPQ0tFRDogMixcbiAgUEVORElOR19JTkNPTUlORzogMyxcbiAgUEVORElOR19PVVRHT0lORzogNCxcbiAgSU1QTElDSVQ6IDUsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IHsgYnJvd3NlciB9ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgV2ViU29ja2V0ID0gYnJvd3NlciA/IHdpbmRvdy5XZWJTb2NrZXQgOiByZXF1aXJlKCd3cycpO1xuXG5jb25zdCBwYWNrID0gKGQpID0+IEpTT04uc3RyaW5naWZ5KGQpO1xuY29uc3QgdW5wYWNrID0gKHMpID0+IEpTT04ucGFyc2Uocyk7XG5cbmNsYXNzIFdlYlNvY2tldFRyYW5zcG9ydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy53cyA9IG51bGw7XG4gICAgdGhpcy50cmllcyA9IDA7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIGNvbnN0IHBvcnQgPSA2NDYzICsgKHRoaXMudHJpZXMgJSAxMCk7XG4gICAgdGhpcy50cmllcyArPSAxO1xuXG4gICAgdGhpcy53cyA9IG5ldyBXZWJTb2NrZXQoXG4gICAgICBgd3M6Ly8xMjcuMC4wLjE6JHtwb3J0fS8/dj0xJmNsaWVudF9pZD0ke3RoaXMuY2xpZW50LmNsaWVudElkfWAsXG4gICAgICBicm93c2VyID8gdW5kZWZpbmVkIDogeyBvcmlnaW46IHRoaXMuY2xpZW50Lm9wdGlvbnMub3JpZ2luIH0sXG4gICAgKTtcbiAgICB0aGlzLndzLm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy53cy5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuZW1pdCgnb3BlbicpO1xuICB9XG5cbiAgb25DbG9zZShldmVudCkge1xuICAgIGlmICghZXZlbnQud2FzQ2xlYW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0KCdjbG9zZScsIGV2ZW50KTtcbiAgfVxuXG4gIG9uRXJyb3IoZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgIH0gY2F0Y2gge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG4gICAgaWYgKHRoaXMudHJpZXMgPiAyMCkge1xuICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGV2ZW50LmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH1cblxuICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCB1bnBhY2soZXZlbnQuZGF0YSkpO1xuICB9XG5cbiAgc2VuZChkYXRhKSB7XG4gICAgdGhpcy53cy5zZW5kKHBhY2soZGF0YSkpO1xuICB9XG5cbiAgcGluZygpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHktZnVuY3Rpb25cblxuICBjbG9zZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHIpID0+IHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCByKTtcbiAgICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlNvY2tldFRyYW5zcG9ydDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlwYzogcmVxdWlyZSgnLi9pcGMnKSxcbiAgd2Vic29ja2V0OiByZXF1aXJlKCcuL3dlYnNvY2tldCcpLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCB7IHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCB9ID0gcmVxdWlyZSgndGltZXJzJyk7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbmNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMnKTtcbmNvbnN0IHsgUlBDQ29tbWFuZHMsIFJQQ0V2ZW50cywgUmVsYXRpb25zaGlwVHlwZXMgfSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCB7IHBpZDogZ2V0UGlkLCB1dWlkIH0gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gc3ViS2V5KGV2ZW50LCBhcmdzKSB7XG4gIHJldHVybiBgJHtldmVudH0ke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge1JQQ0NsaWVudE9wdGlvbnN9XG4gKiBAZXh0ZW5kcyB7Q2xpZW50T3B0aW9uc31cbiAqIEBwcm9wIHtzdHJpbmd9IHRyYW5zcG9ydCBSUEMgdHJhbnNwb3J0LiBvbmUgb2YgYGlwY2Agb3IgYHdlYnNvY2tldGBcbiAqL1xuXG4vKipcbiAqIFRoZSBtYWluIGh1YiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBEaXNjb3JkIFJQQ1xuICogQGV4dGVuZHMge0Jhc2VDbGllbnR9XG4gKi9cbmNsYXNzIFJQQ0NsaWVudCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge1JQQ0NsaWVudE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIGZvciB0aGUgY2xpZW50LlxuICAgKiBZb3UgbXVzdCBwcm92aWRlIGEgdHJhbnNwb3J0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgIHRoaXMuY2xpZW50SWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXBwbGljYXRpb24gdXNlZCBpbiB0aGlzIGNsaWVudFxuICAgICAqIEB0eXBlIHs/Q2xpZW50QXBwbGljYXRpb259XG4gICAgICovXG4gICAgdGhpcy5hcHBsaWNhdGlvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVc2VyIHVzZWQgaW4gdGhpcyBhcHBsaWNhdGlvblxuICAgICAqIEB0eXBlIHs/VXNlcn1cbiAgICAgKi9cbiAgICB0aGlzLnVzZXIgPSBudWxsO1xuXG4gICAgY29uc3QgVHJhbnNwb3J0ID0gdHJhbnNwb3J0c1tvcHRpb25zLnRyYW5zcG9ydF07XG4gICAgaWYgKCFUcmFuc3BvcnQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JQQ19JTlZBTElEX1RSQU5TUE9SVCcsIG9wdGlvbnMudHJhbnNwb3J0KTtcbiAgICB9XG5cbiAgICB0aGlzLmZldGNoID0gKG1ldGhvZCwgcGF0aCwgeyBkYXRhLCBxdWVyeSB9ID0ge30pID0+XG4gICAgICBmZXRjaChgJHt0aGlzLmZldGNoLmVuZHBvaW50fSR7cGF0aH0ke3F1ZXJ5ID8gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeSkgOiAnJ31gLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLmFjY2Vzc1Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKGFzeW5jIChyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByLmpzb24oKTtcbiAgICAgICAgaWYgKCFyLm9rKSB7XG4gICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcihyLnN0YXR1cyk7XG4gICAgICAgICAgZS5ib2R5ID0gYm9keTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmZldGNoLmVuZHBvaW50ID0gJ2h0dHBzOi8vZGlzY29yZC5jb20vYXBpJztcblxuICAgIC8qKlxuICAgICAqIFJhdyB0cmFuc3BvcnQgdXNlcmRcbiAgICAgKiBAdHlwZSB7UlBDVHJhbnNwb3J0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50cmFuc3BvcnQgPSBuZXcgVHJhbnNwb3J0KHRoaXMpO1xuICAgIHRoaXMudHJhbnNwb3J0Lm9uKCdtZXNzYWdlJywgdGhpcy5fb25ScGNNZXNzYWdlLmJpbmQodGhpcykpO1xuXG4gICAgLyoqXG4gICAgICogTWFwIG9mIG5vbmNlcyBiZWluZyBleHBlY3RlZCBmcm9tIHRoZSB0cmFuc3BvcnRcbiAgICAgKiBAdHlwZSB7TWFwfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZWN0aW5nID0gbmV3IE1hcCgpO1xuXG4gICAgLyoqXG4gICAgICogTWFwIG9mIGN1cnJlbnQgc3Vic2NyaXB0aW9uc1xuICAgICAqIEB0eXBlIHtNYXB9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGFuZCBjb25uZWN0IHRvIFJQQ1xuICAgKi9cbiAgY29ubmVjdChjbGllbnRJZCkge1xuICAgIGlmICh0aGlzLl9jb25uZWN0UHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlO1xuICAgIH1cbiAgICB0aGlzLl9jb25uZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoJ1JQQ19DT05ORUNUSU9OX1RJTUVPVVQnKSksIDEwZTMpO1xuICAgICAgdGltZW91dC51bnJlZigpO1xuICAgICAgdGhpcy5vbmNlKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50cmFuc3BvcnQub25jZSgnY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2V4cGVjdGluZy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgZS5yZWplY3QobmV3IEVycm9yKCdjb25uZWN0aW9uIGNsb3NlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gY2xvc2VkJykpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5jb25uZWN0KCkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge1JQQ0xvZ2luT3B0aW9uc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsaWVudElkIENsaWVudCBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2NsaWVudFNlY3JldF0gQ2xpZW50IHNlY3JldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1Rva2VuXSBBY2Nlc3MgdG9rZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtycGNUb2tlbl0gUlBDIHRva2VuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdG9rZW5FbmRwb2ludF0gVG9rZW4gZW5kcG9pbnRcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3Njb3Blc10gU2NvcGVzIHRvIGF1dGhvcml6ZSB3aXRoXG4gICAqL1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhdXRoZW50aWNhdGlvbiBmbG93LiBBdXRvbWF0aWNhbGx5IGNhbGxzIENsaWVudCNjb25uZWN0IGlmIG5lZWRlZC5cbiAgICogQHBhcmFtIHtSUENMb2dpbk9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgYXV0aGVudGljYXRpb24uXG4gICAqIEF0IGxlYXN0IG9uZSBwcm9wZXJ0eSBtdXN0IGJlIHByb3ZpZGVkIHRvIHBlcmZvcm0gbG9naW4uXG4gICAqIEBleGFtcGxlIGNsaWVudC5sb2dpbih7IGNsaWVudElkOiAnMTIzNDU2NycsIGNsaWVudFNlY3JldDogJ2FiY2RlZjEyMycgfSk7XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJQQ0NsaWVudD59XG4gICAqL1xuICBhc3luYyBsb2dpbihvcHRpb25zID0ge30pIHtcbiAgICBsZXQgeyBjbGllbnRJZCwgYWNjZXNzVG9rZW4gfSA9IG9wdGlvbnM7XG4gICAgYXdhaXQgdGhpcy5jb25uZWN0KGNsaWVudElkKTtcbiAgICBpZiAoIW9wdGlvbnMuc2NvcGVzKSB7XG4gICAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgICAgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLmF1dGhvcml6ZShvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlKGFjY2Vzc1Rva2VuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbWQgQ29tbWFuZFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2FyZ3M9e31dIEFyZ3VtZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V2dF0gRXZlbnRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICByZXF1ZXN0KGNtZCwgYXJncywgZXZ0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IG5vbmNlID0gdXVpZCgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh7IGNtZCwgYXJncywgZXZ0LCBub25jZSB9KTtcbiAgICAgIHRoaXMuX2V4cGVjdGluZy5zZXQobm9uY2UsIHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgaGFuZGxlclxuICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBtZXNzYWdlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25ScGNNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZS5jbWQgPT09IFJQQ0NvbW1hbmRzLkRJU1BBVENIICYmIG1lc3NhZ2UuZXZ0ID09PSBSUENFdmVudHMuUkVBRFkpIHtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGEudXNlcikge1xuICAgICAgICB0aGlzLnVzZXIgPSBtZXNzYWdlLmRhdGEudXNlcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCgnY29ubmVjdGVkJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9leHBlY3RpbmcuaGFzKG1lc3NhZ2Uubm9uY2UpKSB7XG4gICAgICBjb25zdCB7IHJlc29sdmUsIHJlamVjdCB9ID0gdGhpcy5fZXhwZWN0aW5nLmdldChtZXNzYWdlLm5vbmNlKTtcbiAgICAgIGlmIChtZXNzYWdlLmV2dCA9PT0gJ0VSUk9SJykge1xuICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKG1lc3NhZ2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgZS5jb2RlID0gbWVzc2FnZS5kYXRhLmNvZGU7XG4gICAgICAgIGUuZGF0YSA9IG1lc3NhZ2UuZGF0YTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShtZXNzYWdlLmRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZXhwZWN0aW5nLmRlbGV0ZShtZXNzYWdlLm5vbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3ViaWQgPSBzdWJLZXkobWVzc2FnZS5ldnQsIG1lc3NhZ2UuYXJncyk7XG4gICAgICBpZiAoIXRoaXMuX3N1YnNjcmlwdGlvbnMuaGFzKHN1YmlkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmdldChzdWJpZCkobWVzc2FnZS5kYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXV0aG9yaXplXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBhdXRob3JpemUoeyBzY29wZXMsIGNsaWVudFNlY3JldCwgcnBjVG9rZW4sIHJlZGlyZWN0VXJpIH0gPSB7fSkge1xuICAgIGlmIChjbGllbnRTZWNyZXQgJiYgcnBjVG9rZW4gPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCB0aGlzLmZldGNoKCdQT1NUJywgJy9vYXV0aDIvdG9rZW4vcnBjJywge1xuICAgICAgICBkYXRhOiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgcnBjVG9rZW4gPSBib2R5LnJwY190b2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvZGUgfSA9IGF3YWl0IHRoaXMucmVxdWVzdCgnQVVUSE9SSVpFJywge1xuICAgICAgc2NvcGVzLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgcnBjX3Rva2VuOiBycGNUb2tlbixcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mZXRjaCgnUE9TVCcsICcvb2F1dGgyL3Rva2VuJywge1xuICAgICAgZGF0YTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgICBjb2RlLFxuICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmFjY2Vzc190b2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRoZW50aWNhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIGFjY2VzcyB0b2tlblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGF1dGhlbnRpY2F0ZShhY2Nlc3NUb2tlbikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0FVVEhFTlRJQ0FURScsIHsgYWNjZXNzX3Rva2VuOiBhY2Nlc3NUb2tlbiB9KVxuICAgICAgLnRoZW4oKHsgYXBwbGljYXRpb24sIHVzZXIgfSkgPT4ge1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24gPSBhcHBsaWNhdGlvbjtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogRmV0Y2ggYSBndWlsZFxuICAgKiBAcGFyYW0ge1Nub3dmbGFrZX0gaWQgR3VpbGQgSURcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8R3VpbGQ+fVxuICAgKi9cbiAgZ2V0R3VpbGQoaWQsIHRpbWVvdXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9HVUlMRCwgeyBndWlsZF9pZDogaWQsIHRpbWVvdXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggYWxsIGd1aWxkc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVvdXRdIFRpbWVvdXQgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb2xsZWN0aW9uPFNub3dmbGFrZSwgR3VpbGQ+Pn1cbiAgICovXG4gIGdldEd1aWxkcyh0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5HRVRfR1VJTERTLCB7IHRpbWVvdXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgY2hhbm5lbFxuICAgKiBAcGFyYW0ge1Nub3dmbGFrZX0gaWQgQ2hhbm5lbCBJRFxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVvdXRdIFRpbWVvdXQgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDaGFubmVsPn1cbiAgICovXG4gIGdldENoYW5uZWwoaWQsIHRpbWVvdXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgY2hhbm5lbHNcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IFtpZF0gR3VpbGQgSURcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lb3V0XSBUaW1lb3V0IHJlcXVlc3RcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29sbGVjdGlvbjxTbm93Zmxha2UsIENoYW5uZWw+Pn1cbiAgICovXG4gIGFzeW5jIGdldENoYW5uZWxzKGlkLCB0aW1lb3V0KSB7XG4gICAgY29uc3QgeyBjaGFubmVscyB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9DSEFOTkVMUywge1xuICAgICAgdGltZW91dCxcbiAgICAgIGd1aWxkX2lkOiBpZCxcbiAgICB9KTtcbiAgICByZXR1cm4gY2hhbm5lbHM7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge0NlcnRpZmllZERldmljZX1cbiAgICogQHByb3Age3N0cmluZ30gdHlwZSBPbmUgb2YgYEFVRElPX0lOUFVUYCwgYEFVRElPX09VVFBVVGAsIGBWSURFT19JTlBVVGBcbiAgICogQHByb3Age3N0cmluZ30gdXVpZCBUaGlzIGRldmljZSdzIFdpbmRvd3MgVVVJRFxuICAgKiBAcHJvcCB7b2JqZWN0fSB2ZW5kb3IgVmVuZG9yIGluZm9ybWF0aW9uXG4gICAqIEBwcm9wIHtzdHJpbmd9IHZlbmRvci5uYW1lIFZlbmRvcidzIG5hbWVcbiAgICogQHByb3Age3N0cmluZ30gdmVuZG9yLnVybCBWZW5kb3IncyB1cmxcbiAgICogQHByb3Age29iamVjdH0gbW9kZWwgTW9kZWwgaW5mb3JtYXRpb25cbiAgICogQHByb3Age3N0cmluZ30gbW9kZWwubmFtZSBNb2RlbCdzIG5hbWVcbiAgICogQHByb3Age3N0cmluZ30gbW9kZWwudXJsIE1vZGVsJ3MgdXJsXG4gICAqIEBwcm9wIHtzdHJpbmdbXX0gcmVsYXRlZCBBcnJheSBvZiByZWxhdGVkIHByb2R1Y3QncyBXaW5kb3dzIFVVSURzXG4gICAqIEBwcm9wIHtib29sZWFufSBlY2hvQ2FuY2VsbGF0aW9uIElmIHRoZSBkZXZpY2UgaGFzIGVjaG8gY2FuY2VsbGF0aW9uXG4gICAqIEBwcm9wIHtib29sZWFufSBub2lzZVN1cHByZXNzaW9uIElmIHRoZSBkZXZpY2UgaGFzIG5vaXNlIHN1cHByZXNzaW9uXG4gICAqIEBwcm9wIHtib29sZWFufSBhdXRvbWF0aWNHYWluQ29udHJvbCBJZiB0aGUgZGV2aWNlIGhhcyBhdXRvbWF0aWMgZ2FpbiBjb250cm9sXG4gICAqIEBwcm9wIHtib29sZWFufSBoYXJkd2FyZU11dGUgSWYgdGhlIGRldmljZSBoYXMgYSBoYXJkd2FyZSBtdXRlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUZWxsIGRpc2NvcmQgd2hpY2ggZGV2aWNlcyBhcmUgY2VydGlmaWVkXG4gICAqIEBwYXJhbSB7Q2VydGlmaWVkRGV2aWNlW119IGRldmljZXMgQ2VydGlmaWVkIGRldmljZXMgdG8gc2VuZCB0byBkaXNjb3JkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0Q2VydGlmaWVkRGV2aWNlcyhkZXZpY2VzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRVRfQ0VSVElGSUVEX0RFVklDRVMsIHtcbiAgICAgIGRldmljZXM6IGRldmljZXMubWFwKChkKSA9PiAoe1xuICAgICAgICB0eXBlOiBkLnR5cGUsXG4gICAgICAgIGlkOiBkLnV1aWQsXG4gICAgICAgIHZlbmRvcjogZC52ZW5kb3IsXG4gICAgICAgIG1vZGVsOiBkLm1vZGVsLFxuICAgICAgICByZWxhdGVkOiBkLnJlbGF0ZWQsXG4gICAgICAgIGVjaG9fY2FuY2VsbGF0aW9uOiBkLmVjaG9DYW5jZWxsYXRpb24sXG4gICAgICAgIG5vaXNlX3N1cHByZXNzaW9uOiBkLm5vaXNlU3VwcHJlc3Npb24sXG4gICAgICAgIGF1dG9tYXRpY19nYWluX2NvbnRyb2w6IGQuYXV0b21hdGljR2FpbkNvbnRyb2wsXG4gICAgICAgIGhhcmR3YXJlX211dGU6IGQuaGFyZHdhcmVNdXRlLFxuICAgICAgfSkpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtVc2VyVm9pY2VTZXR0aW5nc31cbiAgICogQHByb3Age1Nub3dmbGFrZX0gaWQgSUQgb2YgdGhlIHVzZXIgdGhlc2Ugc2V0dGluZ3MgYXBwbHkgdG9cbiAgICogQHByb3Agez9PYmplY3R9IFtwYW5dIFBhbiBzZXR0aW5ncywgYW4gb2JqZWN0IHdpdGggYGxlZnRgIGFuZCBgcmlnaHRgIHNldCBiZXR3ZWVuXG4gICAqIDAuMCBhbmQgMS4wLCBpbmNsdXNpdmVcbiAgICogQHByb3Agez9udW1iZXJ9IFt2b2x1bWU9MTAwXSBUaGUgdm9sdW1lXG4gICAqIEBwcm9wIHtib29sfSBbbXV0ZV0gSWYgdGhlIHVzZXIgaXMgbXV0ZWRcbiAgICovXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdm9pY2Ugc2V0dGluZ3MgZm9yIGEgdXNlciwgYnkgaWRcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB1c2VyIHRvIHNldFxuICAgKiBAcGFyYW0ge1VzZXJWb2ljZVNldHRpbmdzfSBzZXR0aW5ncyBTZXR0aW5nc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFVzZXJWb2ljZVNldHRpbmdzKGlkLCBzZXR0aW5ncykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX1VTRVJfVk9JQ0VfU0VUVElOR1MsIHtcbiAgICAgIHVzZXJfaWQ6IGlkLFxuICAgICAgcGFuOiBzZXR0aW5ncy5wYW4sXG4gICAgICBtdXRlOiBzZXR0aW5ncy5tdXRlLFxuICAgICAgdm9sdW1lOiBzZXR0aW5ncy52b2x1bWUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgdXNlciB0byBhIHZvaWNlIGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZW91dF0gVGltZW91dCBmb3IgdGhlIGNvbW1hbmRcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mb3JjZV0gRm9yY2UgdGhpcyBtb3ZlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGRvbmUgaWYgeW91XG4gICAqIGhhdmUgZXhwbGljaXQgcGVybWlzc2lvbiBmcm9tIHRoZSB1c2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbGVjdFZvaWNlQ2hhbm5lbChpZCwgeyB0aW1lb3V0LCBmb3JjZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VMRUNUX1ZPSUNFX0NIQU5ORUwsIHsgY2hhbm5lbF9pZDogaWQsIHRpbWVvdXQsIGZvcmNlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHVzZXIgdG8gYSB0ZXh0IGNoYW5uZWxcbiAgICogQHBhcmFtIHtTbm93Zmxha2V9IGlkIElEIG9mIHRoZSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGltZW91dF0gVGltZW91dCBmb3IgdGhlIGNvbW1hbmRcbiAgICogaGF2ZSBleHBsaWNpdCBwZXJtaXNzaW9uIGZyb20gdGhlIHVzZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2VsZWN0VGV4dENoYW5uZWwoaWQsIHsgdGltZW91dCB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTEVDVF9URVhUX0NIQU5ORUwsIHsgY2hhbm5lbF9pZDogaWQsIHRpbWVvdXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgdm9pY2Ugc2V0dGluZ3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXRWb2ljZVNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX1ZPSUNFX1NFVFRJTkdTKVxuICAgICAgLnRoZW4oKHMpID0+ICh7XG4gICAgICAgIGF1dG9tYXRpY0dhaW5Db250cm9sOiBzLmF1dG9tYXRpY19nYWluX2NvbnRyb2wsXG4gICAgICAgIGVjaG9DYW5jZWxsYXRpb246IHMuZWNob19jYW5jZWxsYXRpb24sXG4gICAgICAgIG5vaXNlU3VwcHJlc3Npb246IHMubm9pc2Vfc3VwcHJlc3Npb24sXG4gICAgICAgIHFvczogcy5xb3MsXG4gICAgICAgIHNpbGVuY2VXYXJuaW5nOiBzLnNpbGVuY2Vfd2FybmluZyxcbiAgICAgICAgZGVhZjogcy5kZWFmLFxuICAgICAgICBtdXRlOiBzLm11dGUsXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgYXZhaWxhYmxlRGV2aWNlczogcy5pbnB1dC5hdmFpbGFibGVfZGV2aWNlcyxcbiAgICAgICAgICBkZXZpY2U6IHMuaW5wdXQuZGV2aWNlX2lkLFxuICAgICAgICAgIHZvbHVtZTogcy5pbnB1dC52b2x1bWUsXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGF2YWlsYWJsZURldmljZXM6IHMub3V0cHV0LmF2YWlsYWJsZV9kZXZpY2VzLFxuICAgICAgICAgIGRldmljZTogcy5vdXRwdXQuZGV2aWNlX2lkLFxuICAgICAgICAgIHZvbHVtZTogcy5vdXRwdXQudm9sdW1lLFxuICAgICAgICB9LFxuICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgdHlwZTogcy5tb2RlLnR5cGUsXG4gICAgICAgICAgYXV0b1RocmVzaG9sZDogcy5tb2RlLmF1dG9fdGhyZXNob2xkLFxuICAgICAgICAgIHRocmVzaG9sZDogcy5tb2RlLnRocmVzaG9sZCxcbiAgICAgICAgICBzaG9ydGN1dDogcy5tb2RlLnNob3J0Y3V0LFxuICAgICAgICAgIGRlbGF5OiBzLm1vZGUuZGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGN1cnJlbnQgdm9pY2Ugc2V0dGluZ3MsIG92ZXJyaWRpbmcgdGhlIGN1cnJlbnQgc2V0dGluZ3MgdW50aWwgdGhpcyBzZXNzaW9uIGRpc2Nvbm5lY3RzLlxuICAgKiBUaGlzIGFsc28gbG9ja3MgdGhlIHNldHRpbmdzIGZvciBhbnkgb3RoZXIgcnBjIHNlc3Npb25zIHdoaWNoIG1heSBiZSBjb25uZWN0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIFNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0Vm9pY2VTZXR0aW5ncyhhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRVRfVk9JQ0VfU0VUVElOR1MsIHtcbiAgICAgIGF1dG9tYXRpY19nYWluX2NvbnRyb2w6IGFyZ3MuYXV0b21hdGljR2FpbkNvbnRyb2wsXG4gICAgICBlY2hvX2NhbmNlbGxhdGlvbjogYXJncy5lY2hvQ2FuY2VsbGF0aW9uLFxuICAgICAgbm9pc2Vfc3VwcHJlc3Npb246IGFyZ3Mubm9pc2VTdXBwcmVzc2lvbixcbiAgICAgIHFvczogYXJncy5xb3MsXG4gICAgICBzaWxlbmNlX3dhcm5pbmc6IGFyZ3Muc2lsZW5jZVdhcm5pbmcsXG4gICAgICBkZWFmOiBhcmdzLmRlYWYsXG4gICAgICBtdXRlOiBhcmdzLm11dGUsXG4gICAgICBpbnB1dDogYXJncy5pbnB1dCA/IHtcbiAgICAgICAgZGV2aWNlX2lkOiBhcmdzLmlucHV0LmRldmljZSxcbiAgICAgICAgdm9sdW1lOiBhcmdzLmlucHV0LnZvbHVtZSxcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBvdXRwdXQ6IGFyZ3Mub3V0cHV0ID8ge1xuICAgICAgICBkZXZpY2VfaWQ6IGFyZ3Mub3V0cHV0LmRldmljZSxcbiAgICAgICAgdm9sdW1lOiBhcmdzLm91dHB1dC52b2x1bWUsXG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgbW9kZTogYXJncy5tb2RlID8ge1xuICAgICAgICBtb2RlOiBhcmdzLm1vZGUudHlwZSxcbiAgICAgICAgYXV0b190aHJlc2hvbGQ6IGFyZ3MubW9kZS5hdXRvVGhyZXNob2xkLFxuICAgICAgICB0aHJlc2hvbGQ6IGFyZ3MubW9kZS50aHJlc2hvbGQsXG4gICAgICAgIHNob3J0Y3V0OiBhcmdzLm1vZGUuc2hvcnRjdXQsXG4gICAgICAgIGRlbGF5OiBhcmdzLm1vZGUuZGVsYXksXG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcHR1cmUgYSBzaG9ydGN1dCB1c2luZyB0aGUgY2xpZW50XG4gICAqIFRoZSBjYWxsYmFjayB0YWtlcyAoa2V5LCBzdG9wKSB3aGVyZSBgc3RvcGAgaXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3RvcCBjYXB0dXJpbmcuXG4gICAqIFRoaXMgYHN0b3BgIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBkaXNjb25uZWN0aW5nIG9yIGVsc2UgdGhlIHVzZXIgd2lsbCBoYXZlXG4gICAqIHRvIHJlc3RhcnQgdGhlaXIgY2xpZW50LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBoYW5kbGluZyBrZXlzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZ1bmN0aW9uPn1cbiAgICovXG4gIGNhcHR1cmVTaG9ydGN1dChjYWxsYmFjaykge1xuICAgIGNvbnN0IHN1YmlkID0gc3ViS2V5KFJQQ0V2ZW50cy5DQVBUVVJFX1NIT1JUQ1VUX0NIQU5HRSk7XG4gICAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ0FQVFVSRV9TSE9SVENVVCwgeyBhY3Rpb246ICdTVE9QJyB9KTtcbiAgICB9O1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuc2V0KHN1YmlkLCAoeyBzaG9ydGN1dCB9KSA9PiB7XG4gICAgICBjYWxsYmFjayhzaG9ydGN1dCwgc3RvcCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DQVBUVVJFX1NIT1JUQ1VULCB7IGFjdGlvbjogJ1NUQVJUJyB9KVxuICAgICAgLnRoZW4oKCkgPT4gc3RvcCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJlc2VuY2UgZm9yIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgVGhlIHJpY2ggcHJlc2VuY2UgdG8gcGFzcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwaWRdIFRoZSBhcHBsaWNhdGlvbidzIHByb2Nlc3MgSUQuIERlZmF1bHRzIHRvIHRoZSBleGVjdXRpbmcgcHJvY2VzcycgUElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldEFjdGl2aXR5KGFyZ3MgPSB7fSwgcGlkID0gZ2V0UGlkKCkpIHtcbiAgICBsZXQgdGltZXN0YW1wcztcbiAgICBsZXQgYXNzZXRzO1xuICAgIGxldCBwYXJ0eTtcbiAgICBsZXQgc2VjcmV0cztcbiAgICBpZiAoYXJncy5zdGFydFRpbWVzdGFtcCB8fCBhcmdzLmVuZFRpbWVzdGFtcCkge1xuICAgICAgdGltZXN0YW1wcyA9IHtcbiAgICAgICAgc3RhcnQ6IGFyZ3Muc3RhcnRUaW1lc3RhbXAsXG4gICAgICAgIGVuZDogYXJncy5lbmRUaW1lc3RhbXAsXG4gICAgICB9O1xuICAgICAgaWYgKHRpbWVzdGFtcHMuc3RhcnQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRpbWVzdGFtcHMuc3RhcnQgPSBNYXRoLnJvdW5kKHRpbWVzdGFtcHMuc3RhcnQuZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lc3RhbXBzLmVuZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGltZXN0YW1wcy5lbmQgPSBNYXRoLnJvdW5kKHRpbWVzdGFtcHMuZW5kLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXN0YW1wcy5zdGFydCA+IDIxNDc0ODM2NDcwMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RpbWVzdGFtcHMuc3RhcnQgbXVzdCBmaXQgaW50byBhIHVuaXggdGltZXN0YW1wJyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXN0YW1wcy5lbmQgPiAyMTQ3NDgzNjQ3MDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aW1lc3RhbXBzLmVuZCBtdXN0IGZpdCBpbnRvIGEgdW5peCB0aW1lc3RhbXAnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgYXJncy5sYXJnZUltYWdlS2V5IHx8IGFyZ3MubGFyZ2VJbWFnZVRleHRcbiAgICAgIHx8IGFyZ3Muc21hbGxJbWFnZUtleSB8fCBhcmdzLnNtYWxsSW1hZ2VUZXh0XG4gICAgKSB7XG4gICAgICBhc3NldHMgPSB7XG4gICAgICAgIGxhcmdlX2ltYWdlOiBhcmdzLmxhcmdlSW1hZ2VLZXksXG4gICAgICAgIGxhcmdlX3RleHQ6IGFyZ3MubGFyZ2VJbWFnZVRleHQsXG4gICAgICAgIHNtYWxsX2ltYWdlOiBhcmdzLnNtYWxsSW1hZ2VLZXksXG4gICAgICAgIHNtYWxsX3RleHQ6IGFyZ3Muc21hbGxJbWFnZVRleHQsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYXJncy5wYXJ0eVNpemUgfHwgYXJncy5wYXJ0eUlkIHx8IGFyZ3MucGFydHlNYXgpIHtcbiAgICAgIHBhcnR5ID0geyBpZDogYXJncy5wYXJ0eUlkIH07XG4gICAgICBpZiAoYXJncy5wYXJ0eVNpemUgfHwgYXJncy5wYXJ0eU1heCkge1xuICAgICAgICBwYXJ0eS5zaXplID0gW2FyZ3MucGFydHlTaXplLCBhcmdzLnBhcnR5TWF4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyZ3MubWF0Y2hTZWNyZXQgfHwgYXJncy5qb2luU2VjcmV0IHx8IGFyZ3Muc3BlY3RhdGVTZWNyZXQpIHtcbiAgICAgIHNlY3JldHMgPSB7XG4gICAgICAgIG1hdGNoOiBhcmdzLm1hdGNoU2VjcmV0LFxuICAgICAgICBqb2luOiBhcmdzLmpvaW5TZWNyZXQsXG4gICAgICAgIHNwZWN0YXRlOiBhcmdzLnNwZWN0YXRlU2VjcmV0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9BQ1RJVklUWSwge1xuICAgICAgcGlkLFxuICAgICAgYWN0aXZpdHk6IHtcbiAgICAgICAgc3RhdGU6IGFyZ3Muc3RhdGUsXG4gICAgICAgIGRldGFpbHM6IGFyZ3MuZGV0YWlscyxcbiAgICAgICAgdGltZXN0YW1wcyxcbiAgICAgICAgYXNzZXRzLFxuICAgICAgICBwYXJ0eSxcbiAgICAgICAgc2VjcmV0cyxcbiAgICAgICAgYnV0dG9uczogYXJncy5idXR0b25zLFxuICAgICAgICBpbnN0YW5jZTogISFhcmdzLmluc3RhbmNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnRseSBzZXQgcHJlc2VuY2UsIGlmIGFueS4gVGhpcyB3aWxsIGhpZGUgdGhlIFwiUGxheWluZyBYXCIgbWVzc2FnZVxuICAgKiBkaXNwbGF5ZWQgYmVsb3cgdGhlIHVzZXIncyBuYW1lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BpZF0gVGhlIGFwcGxpY2F0aW9uJ3MgcHJvY2VzcyBJRC4gRGVmYXVsdHMgdG8gdGhlIGV4ZWN1dGluZyBwcm9jZXNzJyBQSUQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY2xlYXJBY3Rpdml0eShwaWQgPSBnZXRQaWQoKSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VUX0FDVElWSVRZLCB7XG4gICAgICBwaWQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW52aXRlIGEgdXNlciB0byBqb2luIHRoZSBnYW1lIHRoZSBSUEMgdXNlciBpcyBjdXJyZW50bHkgcGxheWluZ1xuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgdG8gaW52aXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2VuZEpvaW5JbnZpdGUodXNlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VORF9BQ1RJVklUWV9KT0lOX0lOVklURSwge1xuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgdG8gam9pbiB0aGUgZ2FtZSB0aGUgdXNlciBpcyBwbGF5aW5nXG4gICAqIEBwYXJhbSB7VXNlcn0gdXNlciBUaGUgdXNlciB3aG9zZSBnYW1lIHlvdSB3YW50IHRvIHJlcXVlc3QgdG8gam9pblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbmRKb2luUmVxdWVzdCh1c2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRU5EX0FDVElWSVRZX0pPSU5fUkVRVUVTVCwge1xuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlamVjdCBhIGpvaW4gcmVxdWVzdCBmcm9tIGEgdXNlclxuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgd2hvc2UgcmVxdWVzdCB5b3Ugd2lzaCB0byByZWplY3RcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBjbG9zZUpvaW5SZXF1ZXN0KHVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNMT1NFX0FDVElWSVRZX0pPSU5fUkVRVUVTVCwge1xuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTG9iYnkodHlwZSwgY2FwYWNpdHksIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DUkVBVEVfTE9CQlksIHtcbiAgICAgIHR5cGUsXG4gICAgICBjYXBhY2l0eSxcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTG9iYnkobG9iYnksIHsgdHlwZSwgb3duZXIsIGNhcGFjaXR5LCBtZXRhZGF0YSB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVQREFURV9MT0JCWSwge1xuICAgICAgaWQ6IGxvYmJ5LmlkIHx8IGxvYmJ5LFxuICAgICAgdHlwZSxcbiAgICAgIG93bmVyX2lkOiAob3duZXIgJiYgb3duZXIuaWQpIHx8IG93bmVyLFxuICAgICAgY2FwYWNpdHksXG4gICAgICBtZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUxvYmJ5KGxvYmJ5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5ERUxFVEVfTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbm5lY3RUb0xvYmJ5KGlkLCBzZWNyZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkNPTk5FQ1RfVE9fTE9CQlksIHtcbiAgICAgIGlkLFxuICAgICAgc2VjcmV0LFxuICAgIH0pO1xuICB9XG5cbiAgc2VuZFRvTG9iYnkobG9iYnksIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTkRfVE9fTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBkaXNjb25uZWN0RnJvbUxvYmJ5KGxvYmJ5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5ESVNDT05ORUNUX0ZST01fTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUxvYmJ5TWVtYmVyKGxvYmJ5LCB1c2VyLCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuVVBEQVRFX0xPQkJZX01FTUJFUiwge1xuICAgICAgbG9iYnlfaWQ6IGxvYmJ5LmlkIHx8IGxvYmJ5LFxuICAgICAgdXNlcl9pZDogdXNlci5pZCB8fCB1c2VyLFxuICAgICAgbWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWxhdGlvbnNoaXBzKCkge1xuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoUmVsYXRpb25zaGlwVHlwZXMpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX1JFTEFUSU9OU0hJUFMpXG4gICAgICAudGhlbigobykgPT4gby5yZWxhdGlvbnNoaXBzLm1hcCgocikgPT4gKHtcbiAgICAgICAgLi4ucixcbiAgICAgICAgdHlwZTogdHlwZXNbci50eXBlXSxcbiAgICAgIH0pKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBOYW1lIG9mIGV2ZW50IGUuZy4gYE1FU1NBR0VfQ1JFQVRFYFxuICAgKiBAcGFyYW0ge09iamVjdH0gW2FyZ3NdIEFyZ3MgZm9yIGV2ZW50IGUuZy4gYHsgY2hhbm5lbF9pZDogJzEyMzQnIH1gXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHdoZW4gYW4gZXZlbnQgZm9yIHRoZSBzdWJzY3JpcHRpb24gaXMgdHJpZ2dlcmVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gICAqL1xuICBzdWJzY3JpYmUoZXZlbnQsIGFyZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFjYWxsYmFjayAmJiB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBhcmdzO1xuICAgICAgYXJncyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TVUJTQ1JJQkUsIGFyZ3MsIGV2ZW50KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IHN1YmlkID0gc3ViS2V5KGV2ZW50LCBhcmdzKTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuc2V0KHN1YmlkLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVOU1VCU0NSSUJFLCBhcmdzLCBldmVudClcbiAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLl9zdWJzY3JpcHRpb25zLmRlbGV0ZShzdWJpZCkpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBjbGllbnRcbiAgICovXG4gIGFzeW5jIGRlc3Ryb3koKSB7XG4gICAgYXdhaXQgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJQQ0NsaWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2xpZW50OiByZXF1aXJlKCcuL2NsaWVudCcpLFxuICByZWdpc3RlcihpZCkge1xuICAgIHJldHVybiB1dGlsLnJlZ2lzdGVyKGBkaXNjb3JkLSR7aWR9YCk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgT2JzaWRpYW5EaXNjb3JkUlBDIGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIHBsdWdpbjogT2JzaWRpYW5EaXNjb3JkUlBDID0gKHRoaXMgYXMgYW55KS5wbHVnaW47XG5cbiAgbG9nKG1lc3NhZ2U6IHN0cmluZywgc2hvd1BvcHVwczogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzaG93UG9wdXBzKSB7XG4gICAgICBuZXcgTm90aWNlKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBkaXNjb3JkcnBjOiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBsb2dJZ25vcmVOb05vdGljZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBuZXcgTm90aWNlKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUubG9nKGBkaXNjb3JkcnBjOiAke21lc3NhZ2V9YCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEaXNjb3JkUlBDU2V0dGluZ3Mge1xuICBzaG93VmF1bHROYW1lOiBib29sZWFuID0gdHJ1ZTtcbiAgc2hvd0N1cnJlbnRGaWxlTmFtZTogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dQb3B1cHM6IGJvb2xlYW4gPSB0cnVlO1xuICBjdXN0b21WYXVsdE5hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHNob3dGaWxlRXh0ZW5zaW9uOiBib29sZWFuID0gZmFsc2U7XG4gIHVzZUxvYWRlZFRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29ubmVjdE9uU3RhcnQ6IGJvb2xlYW4gPSB0cnVlO1xuICBhdXRvSGlkZVN0YXR1c0JhcjogYm9vbGVhbiA9IHRydWU7XG59XG5cbmV4cG9ydCBlbnVtIFBsdWdpblN0YXRlIHtcbiAgY29ubmVjdGVkLFxuICBjb25uZWN0aW5nLFxuICBkaXNjb25uZWN0ZWQsXG59XG4iLCJpbXBvcnQgeyBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcInNyYy9sb2dnZXJcIjtcbmltcG9ydCBPYnNpZGlhbkRpc2NvcmRSUEMgZnJvbSBcInNyYy9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBEaXNjb3JkUlBDU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgbGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgcGx1Z2luOiBPYnNpZGlhbkRpc2NvcmRSUEMgPSAodGhpcyBhcyBhbnkpLnBsdWdpbjtcblxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiRGlzY29yZCBSaWNoIFByZXNlbmNlIFNldHRpbmdzXCIgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJWYXVsdCBOYW1lIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgVmF1bHQgTmFtZVwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIFwiRW5hYmxlIHRoaXMgdG8gc2hvdyB0aGUgbmFtZSBvZiB0aGUgdmF1bHQgeW91IGFyZSB3b3JraW5nIHdpdGguXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dWYXVsdE5hbWUpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93VmF1bHROYW1lID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIlZhdWx0IE5hbWUgaXMgbm93IFZpc2FibGVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiVmF1bHQgTmFtZSBpcyBubyBsb25nZXIgVmlzYWJsZVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2V0IEN1c3RvbSBWYXVsdCBOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJDaGFuZ2UgdGhlIHZhdWx0IG5hbWUgc2hvd24gcHVibGljbHkuIExlYXZlIGJsYW5rIHRvIHVzZSB5b3VyIGFjdHVhbCB2YXVsdCBuYW1lLlwiXG4gICAgICApXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY3VzdG9tVmF1bHROYW1lKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY3VzdG9tVmF1bHROYW1lID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJGaWxlIE5hbWUgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBDdXJyZW50IEZpbGUgTmFtZVwiKVxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IHRoZSBuYW1lIG9mIHRoZSBmaWxlIHlvdSBhcmUgd29ya2luZyBvbi5cIilcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW5cbiAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiRmlsZSBOYW1lIGlzIG5vdyBWaXNhYmxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJGaWxlIE5hbWUgaXMgbm8gbG9uZ2VyIFZpc2FibGVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBGaWxlIEV4dGVuc2lvblwiKVxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IGZpbGUgZXh0ZW5zaW9uLlwiKVxuICAgICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT5cbiAgICAgICAgYm9vbGVhblxuICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd0ZpbGVFeHRlbnNpb24pXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dGaWxlRXh0ZW5zaW9uID0gdmFsdWU7XG4gICAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIlRpbWUgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiVXNlIE9ic2lkaWFuIFRvdGFsIFRpbWVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkVuYWJsZSB0byB1c2UgdGhlIHRvdGFsIHRpbWUgeW91IGhhdmUgYmVlbiB1c2luZyBPYnNpZGlhbiwgaW5zdGVhZCBvZiB0aGUgdGltZSBzcGVudCBlZGl0aW5nIGEgc2luZ2xlIGZpbGUuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+IHtcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MudXNlTG9hZGVkVGltZSkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnVzZUxvYWRlZFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiU3RhdHVzIEJhciBTZXR0aW5nc1wiIH0pO1xuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoXCJBdXRvbWF0aWNhbGx5IGhpZGUgU3RhdHVzIEJhclwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIFwiQXV0b21hdGljYWxseSBoaWRlIHN0YXR1cyBiYXIgYWZ0ZXIgc3VjY2Vzc2Z1bGx5IGNvbm5lY3RpbmcgdG8gRGlzY29yZC5cIlxuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT4ge1xuICAgICAgICBib29sZWFuLnNldFZhbHVlKHBsdWdpbi5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0Jhcikub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9IaWRlU3RhdHVzQmFyID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIlN0YXJ0dXAgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiQXV0b21hdGljYWxseSBDb25uZWN0IHRvIERpc2NvcmRcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkF1dG9tYXRpY2FsbHkgY29ubmVjdCB0byBEaXNjb3JkIG9uIHN0YXJ0dXAuIFlvdSBjYW4gYWx3YXlzIGNsaWNrIHRoZSBzdGF0dXMgYmFyIHRvIG1hbnVhbGx5IGNvbm5lY3QuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+IHtcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY29ubmVjdE9uU3RhcnQpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5jb25uZWN0T25TdGFydCA9IHZhbHVlO1xuICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJOb3RpY2UgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBOb3RpY2VzXCIpXG4gICAgICAuc2V0RGVzYyhcIkVuYWJsZSB0aGlzIHRvIHNob3cgY29ubmVjdGlvbiBOb3RpY2VzLlwiKVxuICAgICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT5cbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd1BvcHVwcykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dQb3B1cHMgPSB2YWx1ZTtcbiAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgIGlmIChib29sZWFuLmdldFZhbHVlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiTm90aWNlcyBFbmFibGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIk5vdGljZXMgRGlzYWJsZWRcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmJhc2VuYW1lLFxuICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIge1xuICBwcml2YXRlIHN0YXR1c0JhckVsOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnN0YXR1c0JhckVsID0gc3RhdHVzQmFyRWw7XG4gIH1cblxuICBkaXNwbGF5U3RhdGUoc3RhdGU6IFBsdWdpblN0YXRlLCBhdXRvSGlkZTogYm9vbGVhbikge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGVkOlxuICAgICAgICB0aGlzLmRpc3BsYXlDb25uZWN0ZWQoYXV0b0hpZGUgPyAxMDAwMCA6IDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGluZzpcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBDb25uZWN0aW5nIHRvIERpc2NvcmQuLi5gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZDpcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUY1RDh9IFJlY29ubmVjdCB0byBEaXNjb3JkYCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlDb25uZWN0ZWQodGltZW91dDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUYzMER9IENvbm5lY3RlZCB0byBEaXNjb3JkYCk7XG5cbiAgICBpZiAodGltZW91dCAmJiB0aW1lb3V0ID4gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJcIik7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYFxcdXsxRjMwRH1gKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcImRpc2NvcmQtcnBjXCI7XHJcbmltcG9ydCB7IFBsdWdpbiwgUGx1Z2luTWFuaWZlc3QsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBEaXNjb3JkUlBDU2V0dGluZ3MsIFBsdWdpblN0YXRlIH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRGlzY29yZFJQQ1NldHRpbmdzVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MtdGFiXCI7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gXCIuL3N0YXR1cy1iYXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2lkaWFuRGlzY29yZFJQQyBleHRlbmRzIFBsdWdpbiB7XHJcbiAgcHVibGljIHN0YXRlOiBQbHVnaW5TdGF0ZTtcclxuICBwdWJsaWMgc2V0dGluZ3M6IERpc2NvcmRSUENTZXR0aW5ncztcclxuICBwdWJsaWMgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XHJcbiAgcHVibGljIHJwYzogQ2xpZW50O1xyXG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoKTtcclxuICBwdWJsaWMgY3VycmVudEZpbGU6IFRGaWxlO1xyXG4gIHB1YmxpYyBsb2FkZWRUaW1lOiBEYXRlO1xyXG5cclxuICBzZXRTdGF0ZShzdGF0ZTogUGx1Z2luU3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFN0YXRlKCk6IFBsdWdpblN0YXRlIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEFwcCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBsdWdpbk1hbmlmZXN0KCk6IFBsdWdpbk1hbmlmZXN0IHtcclxuICAgIHJldHVybiB0aGlzLm1hbmlmZXN0O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25sb2FkKCkge1xyXG4gICAgbGV0IHN0YXR1c0JhckVsID0gdGhpcy5hZGRTdGF0dXNCYXJJdGVtKCk7XHJcbiAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIoc3RhdHVzQmFyRWwpO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSAoYXdhaXQgdGhpcy5sb2FkRGF0YSgpKSB8fCBuZXcgRGlzY29yZFJQQ1NldHRpbmdzKCk7XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxyXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJmaWxlLW9wZW5cIiwgdGhpcy5vbkZpbGVPcGVuLCB0aGlzKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyRG9tRXZlbnQoc3RhdHVzQmFyRWwsIFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpID09IFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdERpc2NvcmQoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFN0YXRlKCkgPT0gUGx1Z2luU3RhdGUuY29ubmVjdGVkKXtcclxuICAgICAgICBhd2FpdCB0aGlzLmRpc2Nvbm5lY3REaXNjb3JkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgRGlzY29yZFJQQ1NldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwicmVjb25uZWN0LWRpc2NvcmRcIixcclxuICAgICAgbmFtZTogXCJSZWNvbm5lY3QgdG8gRGlzY29yZFwiLFxyXG4gICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5jb25uZWN0RGlzY29yZCgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgaWQ6IFwiZGlzY29ubmVjdC1kaXNjb3JkXCIsXHJcbiAgICAgIG5hbWU6IFwiRGlzY29ubmVjdCBmcm9tIERpc2NvcmRcIixcclxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IGF3YWl0IHRoaXMuZGlzY29ubmVjdERpc2NvcmQoKSxcclxuICAgIH0pXHJcblxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5jb25uZWN0T25TdGFydCl7XHJcbiAgICAgIGF3YWl0IHRoaXMuY29ubmVjdERpc2NvcmQoKTtcclxuXHJcbiAgICAgIGxldCBhY3RpdmVMZWFmID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XHJcbiAgICAgIGxldCBmaWxlczogVEZpbGVbXSA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcclxuXHJcbiAgICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcclxuICAgICAgICBpZiAoZmlsZS5iYXNlbmFtZSA9PT0gYWN0aXZlTGVhZi5nZXREaXNwbGF5VGV4dCgpKSB7XHJcbiAgICAgICAgICB0aGlzLm9uRmlsZU9wZW4oZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuZGlzY29ubmVjdGVkKTtcclxuICAgICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheVN0YXRlKHRoaXMuZ2V0U3RhdGUoKSwgdGhpcy5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0Jhcik7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRmlsZU9wZW4oZmlsZTogVEZpbGUpIHtcclxuICAgIHRoaXMuY3VycmVudEZpbGUgPSBmaWxlO1xyXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoKSA9PT0gUGx1Z2luU3RhdGUuY29ubmVjdGVkKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0QWN0aXZpdHkoXHJcbiAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxyXG4gICAgICAgIGZpbGUuYmFzZW5hbWUsXHJcbiAgICAgICAgZmlsZS5leHRlbnNpb25cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9udW5sb2FkKCkge1xyXG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuICAgIHRoaXMucnBjLmNsZWFyQWN0aXZpdHkoKTtcclxuICAgIHRoaXMucnBjLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGNvbm5lY3REaXNjb3JkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5sb2FkZWRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgIFxyXG4gICAgdGhpcy5ycGMgPSBuZXcgQ2xpZW50KHtcclxuICAgICAgdHJhbnNwb3J0OiBcImlwY1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5jb25uZWN0aW5nKTtcclxuICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCksIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXIpO1xyXG5cclxuICAgIHRoaXMucnBjLm9uY2UoXCJyZWFkeVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29ubmVjdGVkKTtcclxuICAgICAgdGhpcy5zdGF0dXNCYXIuZGlzcGxheVN0YXRlKHRoaXMuZ2V0U3RhdGUoKSwgdGhpcy5zZXR0aW5ncy5hdXRvSGlkZVN0YXR1c0Jhcik7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmxvZyhcIkNvbm5lY3RlZCB0byBEaXNjb3JkXCIsIHRoaXMuc2V0dGluZ3Muc2hvd1BvcHVwcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCB0aGlzLnJwYy5sb2dpbih7XHJcbiAgICAgICAgY2xpZW50SWQ6IFwiNzYzODEzMTg1MDIyMTk3ODMxXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEFjdGl2aXR5KHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSwgXCIuLi5cIiwgXCJcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCksIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXIpO1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2coXCJGYWlsZWQgdG8gY29ubmVjdCB0byBEaXNjb3JkXCIsIHRoaXMuc2V0dGluZ3Muc2hvd1BvcHVwcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBkaXNjb25uZWN0RGlzY29yZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMucnBjLmNsZWFyQWN0aXZpdHkoKTtcclxuICAgIHRoaXMucnBjLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuZGlzY29ubmVjdGVkKTtcclxuICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCksIHRoaXMuc2V0dGluZ3MuYXV0b0hpZGVTdGF0dXNCYXIpO1xyXG4gICAgdGhpcy5sb2dnZXIubG9nKFwiRGlzY29ubmVjdGVkIGZyb20gRGlzY29yZFwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QWN0aXZpdHkoXHJcbiAgICB2YXVsdE5hbWU6IHN0cmluZyxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBmaWxlRXh0ZW5zaW9uOiBzdHJpbmdcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmdldFN0YXRlKCkgPT09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCkge1xyXG4gICAgICBsZXQgdmF1bHQ6IHN0cmluZztcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY3VzdG9tVmF1bHROYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgdmF1bHQgPSB2YXVsdE5hbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmF1bHQgPSB0aGlzLnNldHRpbmdzLmN1c3RvbVZhdWx0TmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGZpbGU6IHN0cmluZztcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd0ZpbGVFeHRlbnNpb24pIHtcclxuICAgICAgICBmaWxlID0gZmlsZU5hbWUgKyBcIi5cIiArIGZpbGVFeHRlbnNpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsZSA9IGZpbGVOYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZGF0ZTogRGF0ZTtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlTG9hZGVkVGltZSkge1xyXG4gICAgICAgIGRhdGUgPSB0aGlzLmxvYWRlZFRpbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dWYXVsdE5hbWUgJiYgdGhpcy5zZXR0aW5ncy5zaG93Q3VycmVudEZpbGVOYW1lKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ycGMuc2V0QWN0aXZpdHkoe1xyXG4gICAgICAgICAgZGV0YWlsczogYEVkaXRpbmcgJHtmaWxlfWAsXHJcbiAgICAgICAgICBzdGF0ZTogYFZhdWx0OiAke3ZhdWx0fWAsXHJcbiAgICAgICAgICBzdGFydFRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwibG9nb1wiLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNob3dWYXVsdE5hbWUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBzdGF0ZTogYFZhdWx0OiAke3ZhdWx0fWAsXHJcbiAgICAgICAgICBzdGFydFRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwibG9nb1wiLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBkZXRhaWxzOiBgRWRpdGluZyAke2ZpbGV9YCxcclxuICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBkYXRlLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgICBsYXJnZUltYWdlVGV4dDogXCJPYnNpZGlhblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucnBjLnNldEFjdGl2aXR5KHtcclxuICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBkYXRlLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgICBsYXJnZUltYWdlVGV4dDogXCJPYnNpZGlhblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwidXVpZCIsIm5ldCIsImZldGNoIiwiRXZlbnRFbWl0dGVyIiwicmVxdWlyZSQkMSIsInNldFRpbWVvdXQiLCJyZXF1aXJlJCQyIiwiTm90aWNlIiwiU2V0dGluZyIsIlBsdWdpblNldHRpbmdUYWIiLCJDbGllbnQiLCJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMs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QU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFO0FBQzdCLEVBQUUsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFNBQVMsU0FBU0gsZ0NBQVksQ0FBQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsV0FBVyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUU7QUFDNUIsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaO0FBQ0EsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMzQjtBQUNBLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNyQjtBQUNBLElBQUksTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDcEIsTUFBTSxNQUFNLElBQUksU0FBUyxDQUFDLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RSxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7QUFDcEQsTUFBTUQsU0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFF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
