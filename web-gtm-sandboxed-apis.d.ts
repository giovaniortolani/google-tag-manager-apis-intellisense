// web-gtm-sandboxed-apis.d.ts
// A complete declaration file for the Google Tag Manager Web Custom Template Sandboxed JavaScript APIs.
// This file enables IntelliSense (autocompletion and hover documentation) in editors like VS Code.

// --------------------------------------------------------------------------
// API Module Declarations
// --------------------------------------------------------------------------

declare module 'addConsentListener' {
  /**
   * Registers a listener function to execute when the state of the specified consent type changes.
   * The listener is invoked every time the state changes from 'denied' to 'granted' or vice-versa.
   * A consent type with no state is considered granted, so the listener won't be called if an unset type is updated to granted.
   * @param consentType The consent type to listen for state changes on.
   * @param listener The function to run when the state changes. It receives the consent type and the new granted state (boolean).
   */
  function addConsentListener(consentType: string, listener: (consentType: string, granted: boolean) => void): void;
  export = addConsentListener;
}

declare module 'addEventCallback' {
  /**
   * Registers a callback function that will be invoked at the end of an event, after all tags have executed or an in-page event timeout is reached.
   * @param callback The function to invoke at the end of the event. It receives the container ID and an eventData object.
   */
  function addEventCallback(callback: (containerId: string, eventData: { tags: { id: string, status: string, executionTime: number }[] }) => void): void;
  export = addEventCallback;
}

declare module 'aliasInWindow' {
  /**
   * Creates an alias in the window object (e.g., window.foo = window.bar).
   * Assigns the value found at `fromPath` to the key at `toPath`.
   * @param toPath A dot-separated path into the window object where a value should be copied to. All components up to the last must already exist.
   * @param fromPath A dot-separated path into the window object to the value to copy.
   * @returns `true` if successful, `false` otherwise.
   */
  function aliasInWindow(toPath: string, fromPath: string): boolean;
  export = aliasInWindow;
}

declare module 'callInWindow' {
  /**
   * Calls a function from a path off the window object in a policy-controlled way.
   * @param pathToFunction A dot-separated path to the function in the window object to call.
   * @param args Arguments to be passed to the function.
   * @returns The value returned by the function. If the return type can't be mapped to a sandboxed JS type (null, undefined, boolean, number, string, Array, Object, function), `undefined` is returned.
   */
  function callInWindow(pathToFunction: string, ...args: any[]): any;
  export = callInWindow;
}

declare module 'callLater' {
  /**
   * Schedules a call to a function to occur asynchronously, after the current code returns. This is equivalent to setTimeout(<function>, 0).
   * @param func The function to call.
   */
  function callLater(func: () => void): void;
  export = callLater;
}

declare module 'copyFromDataLayer' {
  /**
   * Returns the value currently assigned to the given key in the data layer.
   * @param key The key in the format of "a.b.c".
   * @param dataLayerVersion The optional data layer version. Defaults to 2. It is strongly discouraged to use the value 1.
   * @returns The value found at the given key if it's a primitive type, function, or object literal; otherwise, `undefined`.
   */
  function copyFromDataLayer(key: string, dataLayerVersion?: number): any;
  export = copyFromDataLayer;
}

declare module 'copyFromWindow' {
  /**
   * Copies a variable from the window object.
   * @param key The key in the window to copy the value of.
   * @returns The fetched value. If the value can't be directly mapped to a sandboxed JS type (null, undefined, boolean, number, string, Array, Object, function), `undefined` is returned.
   */
  function copyFromWindow(key: string): any;
  export = copyFromWindow;
}

declare module 'createArgumentsQueue' {
  /**
   * Creates a function in the global scope that, when called, pushes its arguments object onto a specified array in the window.
   * @param fnKey The path in the window where the function is set. Throws an exception if the path does not exist.
   * @param arrayKey The path in the window where the array is set. Throws an exception if the path does not exist.
   * @returns The function created under `fnKey`.
   */
  function createArgumentsQueue(fnKey: string, arrayKey: string): (...args: any[]) => void;
  export = createArgumentsQueue;
}

declare module 'createQueue' {
  /**
   * Creates an array in the window (if it doesn't already exist) and returns a function that will push values onto that array.
   * @param arrayKey The key in the window where the array is set. Throws an exception if the path does not exist.
   * @returns A function that pushes values onto the created queue.
   */
  function createQueue(arrayKey: string): (...args: any[]) => void;
  export = createQueue;
}

declare module 'decodeUri' {
  /**
   * Decodes any encoded characters in the provided URI.
   * @param encoded_uri A URI that has been encoded by encodeUri() or by other means.
   * @returns A string that represents the decoded URI. Returns `undefined` when provided with invalid input.
   */
  function decodeUri(encoded_uri: string): string | undefined;
  export = decodeUri;
}

declare module 'decodeUriComponent' {
  /**
   * Decodes any encoded characters in the provided URI component.
   * @param encoded_uri_component A URI component that has been encoded by encodeUriComponent() or by other means.
   * @returns A string that represents the decoded URI component. Returns `undefined` when provided with invalid input.
   */
  function decodeUriComponent(encoded_uri_component: string): string | undefined;
  export = decodeUriComponent;
}

declare module 'encodeUri' {
  /**
   * Returns an encoded Uniform Resource Identifier (URI) by escaping special characters.
   * @param uri A complete URI.
   * @returns A string that represents the provided string encoded as a URI. Returns `undefined` for invalid input (a lone surrogate).
   */
  function encodeUri(uri: string): string | undefined;
  export = encodeUri;
}

declare module 'encodeUriComponent' {
  /**
   * Returns an encoded Uniform Resource Identifier (URI) component by escaping special characters.
   * @param str A component of a URI.
   * @returns A string that represents the provided string encoded as a URI component. Returns `undefined` for invalid input (a lone surrogate).
   */
  function encodeUriComponent(str: string): string | undefined;
  export = encodeUriComponent;
}

declare module 'fromBase64' {
  /**
   * Decodes a string from its base64 representation.
   * @param base64EncodedString The Base64 encoded string.
   * @returns The decoded string, or `undefined` for invalid input.
   */
  function fromBase64(base64EncodedString: string): string | undefined;
  export = fromBase64;
}

declare module 'generateRandom' {
  /**
   * Returns a random number (integer) within the given range.
   * @param min Minimum potential value of the returned integer.
   * @param max Maximum potential value of the returned integer.
   */
  function generateRandom(min: number, max: number): number;
  export = generateRandom;
}

declare module 'getContainerVersion' {
  /**
   * Returns an object containing data about the current container.
   */
  function getContainerVersion(): {
    containerId: string;
    debugMode: boolean;
    environmentName: string;
    environmentMode: boolean;
    previewMode: boolean;
    version: string;
  };
  export = getContainerVersion;
}

declare module 'getCookieValues' {
  /**
   * Returns the values of all cookies with the given name.
   * @param name Name of the cookie.
   * @param decode Controls whether the cookie values are to be decoded with `decodeURIComponent`. Defaults to `true`.
   * @returns An array of cookie values.
   */
  function getCookieValues(name: string, decode?: boolean): string[];
  export = getCookieValues;
}

declare module 'getQueryParameters' {
  /**
   * Returns the first or all of the parameters for the current URL's queryKey.
   * @param queryKey The key to read from the query parameters.
   * @param retrieveAll Whether to retrieve all the values. Defaults to `false`.
   * @returns The first value from the queryKey or an Array of values from the queryKey.
   */
  function getQueryParameters(queryKey: string, retrieveAll?: boolean): string | string[] | undefined;
  export = getQueryParameters;
}

declare module 'getReferrerQueryParameters' {
  /**
   * Acts the same way as getQueryParameters, except it acts on the referrer instead of the current URL.
   * @param queryKey The key to read from the referrer's query parameters.
   * @param retrieveAll Whether to retrieve all the values. Defaults to `false`.
   * @returns The first value from the queryKey or an Array of values from the queryKey.
   */
  function getReferrerQueryParameters(queryKey: string, retrieveAll?: boolean): string | string[] | undefined;
  export = getReferrerQueryParameters;
}

declare module 'getReferrerUrl' {
  /**
   * Reads the document object for the referrer and returns a string that represents all or a portion of the referrer.
   * @param component The component to return from the URL ('protocol', 'host', 'port', 'path', 'query', 'extension'). If not specified, the full referrer URL is returned.
   * @returns The requested part of the referrer URL.
   */
  function getReferrerUrl(component?: 'protocol' | 'host' | 'port' | 'path' | 'query' | 'extension'): string;
  export = getReferrerUrl;
}

declare module 'getTimestamp' {
  /**
   * @deprecated Prefer getTimestampMillis.
   * Returns a number that represents the current time in milliseconds since Unix epoch.
   */
  function getTimestamp(): number;
  export = getTimestamp;
}

declare module 'getTimestampMillis' {
  /**
   * Returns a number that represents the current time in milliseconds since Unix epoch, as returned by Date.now().
   */
  function getTimestampMillis(): number;
  export = getTimestampMillis;
}

declare module 'getType' {
  /**
   * Returns a string describing the given value's type. Unlike `typeof`, this differentiates between 'array' and 'object'.
   * @param value The value to check.
   * @returns 'string', 'number', 'boolean', 'null', 'undefined', 'array', 'object', or 'function'.
   */
  function getType(value: any): 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'array' | 'object' | 'function';
  export = getType;
}

declare module 'getUrl' {
  /**
   * Returns a string that represents all or a portion of the current URL.
   * @param component The component to return ('protocol', 'host', 'port', 'path', 'query', 'extension', 'fragment'). If not specified, the entire href is returned.
   * @returns The requested part of the URL.
   */
  function getUrl(component?: 'protocol' | 'host' | 'port' | 'path' | 'query' | 'extension' | 'fragment'): string;
  export = getUrl;
}

declare module 'gtagSet' {
  /**
   * Pushes a gtag `set` command to the data layer, to be processed as soon as possible after the current event.
   * The update is guaranteed to be processed in this container before any queued items in the data layer queue.
   * @param settings An object that updates the global state for its containing properties (e.g., {'ads_data_redaction': true}).
   */
  function gtagSet(settings: object): void;
  export = gtagSet;
}

declare module 'injectHiddenIframe' {
  /**
   * Adds an invisible iframe to the page.
   * @param url The URL to be used as the value of the iframe's `src` attribute.
   * @param onSuccess A callback function called when the frame loads successfully.
   */
  function injectHiddenIframe(url: string, onSuccess: () => void): void;
  export = injectHiddenIframe;
}

declare module 'injectScript' {
  /**
   * Adds a script tag to the page to load the given URL asynchronously.
   * @param url The address of the script to be injected.
   * @param onSuccess A callback function called when the script loads successfully.
   * @param onFailure A callback function called when the script fails to load.
   * @param cacheToken Optional string used to indicate the given URL should be cached. If specified, only one script element will be created for this URL.
   */
  function injectScript(url: string, onSuccess: () => void, onFailure: () => void, cacheToken?: string): void;
  export = injectScript;
}

declare module 'isConsentGranted' {
  /**
   * Returns true if the specified consent type is granted. Consent is considered granted if set to 'granted' or not set at all.
   * If a tag using this API is set to 'always fire', this will return true regardless of the actual consent state.
   * @param consentType The consent type to check the state of.
   * @returns `true` if consent is granted, `false` otherwise.
   */
  function isConsentGranted(consentType: string): boolean;
  export = isConsentGranted;
}

declare module 'JSON' {
  /** An object that provides JSON functions. */
  const JSON: {
    /**
     * Parses a JSON string, constructing the JavaScript value or object described by the string.
     * @param stringInput The value to parse. If not a string, it will be coerced to a string.
     * @returns The parsed object, or `undefined` if parsing fails (e.g., malformed JSON).
     */
    parse(stringInput: any): any;
    /**
     * Converts a JavaScript value to a JSON string.
     * @param value The value to convert.
     * @returns A JSON string, or `undefined` if the value cannot be stringified (e.g., it has a cycle).
     */
    stringify(value: any): string | undefined;
  };
  export = JSON;
}

declare module 'localStorage' {
  /** An object with methods for accessing local storage. */
  const localStorage: {
    /**
     * Retrieves an item from local storage.
     * @param key The key of the item to retrieve.
     * @returns The item's value, or `null` if the key does not exist.
     */
    getItem(key: string): string | null;
    /**
     * Adds or updates an item in local storage.
     * @param key The key of the item to set.
     * @param value The value to store.
     * @returns `true` if successful.
     */
    setItem(key: string, value: string): boolean;
    /**
     * Removes an item from local storage.
     * @param key The key of the item to remove.
     */
    removeItem(key: string): void;
  };
  export = localStorage;
}

declare module 'logToConsole' {
  /**
   * Logs arguments to the browser console.
   * @param args The arguments to log.
   */
  function logToConsole(...args: any[]): void;
  export = logToConsole;
}

declare module 'makeInteger' {
  /**
   * Converts the given value to a number (integer).
   * @param value The value to convert.
   */
  function makeInteger(value: any): number;
  export = makeInteger;
}

declare module 'makeNumber' {
  /**
   * Converts the given value to a number.
   * @param value The value to convert.
   */
  function makeNumber(value: any): number;
  export = makeNumber;
}

declare module 'makeString' {
  /**
   * Returns the given value as a string.
   * @param value The value to convert.
   */
  function makeString(value: any): string;
  export = makeString;
}

declare module 'makeTableMap' {
    /**
     * Converts a simple table object with two columns to a Map. This is used to change a SIMPLE_TABLE template field into a more manageable format.
     * @param tableObj The table object to convert. It's a list of maps where each Map represents a row.
     * @param keyColumnName Name of the column whose values will become keys in the converted Map.
     * @param valueColumnName Name of the column whose values will become values in the converted Map.
     * @returns An Object with the converted Map of key-value pairs, or null otherwise.
     */
    function makeTableMap(tableObj: object[], keyColumnName: string, valueColumnName: string): object | null;
    export = makeTableMap;
}

declare module 'Math' {
  /** An object providing Math functions. Parameters are converted to numbers. */
  const Math: {
    abs(x: number): number;
    ceil(x: number): number;
    floor(x: number): number;
    round(x: number): number;
    max(...values: number[]): number;
    min(...values: number[]): number;
    pow(base: number, exponent: number): number;
    sqrt(x: number): number;
  };
  export = Math;
}

declare module 'Object' {
  /** An object that provides Standard Library Object methods. */
  const Object: {
    /**
     * Provides the Standard Library Object.keys() behavior.
     * It returns an array of a given object's own enumerable property names in the same order that a for...in... loop would.
     * @param objectInput The object whose keys to enumerate. If the input is not an object, it will be coerced to an object.
     */
    keys(objectInput: any): string[];
    /**
     * Provides the Standard Library Object.values() behavior.
     * It returns an array of a given object's own enumerable property values in the same order that a for...in... loop would.
     * @param objectInput The object whose values to enumerate. If the input is not an object, it will be coerced to an object.
     */
    values(objectInput: any): any[];
    /**
     * Provides the Standard Library Object.entries() behavior.
     * It returns an array of a given object's own enumerable property [key, value] pairs in the same order that a for...in... loop would.
     * @param objectInput The object whose key/value pairs to enumerate. If the input is not an object, it will be coerced to an object.
     */
    entries(objectInput: any): [string, any][];
    /**
     * Provides the Standard Library Object.freeze() behavior. A frozen object can no longer be changed.
     * Freezing an object prevents new properties from being added, existing properties from being removed, and values from being changed.
     * @param objectInput The object to freeze. A primitive or null argument will be treated as if it were a frozen object and will be returned.
     * @returns The same object that was passed in.
     */
    freeze<T>(objectInput: T): T;
    /**
     * Provides the Standard Library delete operator behavior. It removes the given key from the object unless the object is frozen.
     * It differs from the standard operator in that it cannot use dot-delimited strings for nested keys, cannot remove array elements, and cannot remove properties from the global scope.
     * @param objectInput The object whose key to delete.
     * @param keyToDelete The top-level key to delete.
     * @returns `true` if the object is not frozen, even if the key does not exist. Returns `false` in all other cases.
     */
    delete(objectInput: any, keyToDelete: string): boolean;
  };
  export = Object;
}

declare module 'parseUrl' {
  /**
   * Returns an object that contains all of a given URL's component parts, similar to the URL object.
   * @param url The full url that will be parsed.
   * @returns An object with URL components, or `undefined` for a malformed URL. Fields not present in the URL will be an empty string or object.
   */
  function parseUrl(url: string): {
    href: string;
    origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    searchParams: { [key: string]: string | string[] };
    hash: string;
  } | undefined;
  export = parseUrl;
}

declare module 'queryPermission' {
  /**
   * Queries the allowed and narrowed permissions.
   * @param permission Name of the permission to query.
   * @param functionArgs Additional arguments that vary based on the permission being queried (e.g., a URL for `sendPixel`, a key for `readGlobals`).
   * @returns `true` if the permission is granted, `false` otherwise.
   */
  function queryPermission(permission: string, ...functionArgs: any[]): boolean;
  export = queryPermission;
}

declare module 'readAnalyticsStorage' {
  /**
   * Retrieves the data stored for analytics and returns an object with client_id and sessions.
   * @param cookieOptions Optional options for reading cookies with a specific `cookie_prefix`, `cookie_domain`, or `cookie_path`.
   * @returns An object containing analytics storage data, or `undefined` if it cannot be read.
   */
  function readAnalyticsStorage(cookieOptions?: {
    cookie_prefix?: string;
    cookie_domain?: string;
    cookie_path?: string;
  }): {
    /** A string representing the client ID used for analytics. */
    client_id: string;
    /** An array of objects containing information about current sessions. */
    sessions: {
      /** A string representing the measurement ID of the Analytics Destination. */
      measurement_id: string;
      /** A string representing the timestamp that identifies the current session. */
      session_id: string;
      /** A number representing the count of sessions that a user has started up to the current session. */
      session_number: number;
    }[];
  } | undefined;
  export = readAnalyticsStorage;
}

declare module 'readCharacterSet' {
  /**
   * Returns the value of `document.characterSet`.
   */
  function readCharacterSet(): string;
  export = readCharacterSet;
}

declare module 'readTitle' {
  /**
   * Returns the value of `document.title`.
   */
  function readTitle(): string;
  export = readTitle;
}

declare module 'require' {
  /**
   * Imports a built-in function by name.
   * @param name The name of the function to import.
   * @returns A function or an object. Returns `undefined` when the browser does not support the built-in function.
   */
  function require(name: string): any;
  export = require;
}

declare module 'sendPixel' {
  /**
   * Makes a GET request to a specified URL endpoint.
   * @param url Where to send the pixel.
   * @param onSuccess Called when the pixel successfully loads. Note: browsers may require a valid image response to run this.
   * @param onFailure Called when the pixel fails to load. Note: may run even if the request sends, if the server doesn't return a valid image.
   */
  function sendPixel(url: string, onSuccess?: () => void, onFailure?: () => void): void;
  export = sendPixel;
}

declare module 'setCookie' {
  /**
   * Sets or deletes a cookie with the specified name, value, and options.
   * @param name Name of the cookie.
   * @param value Value of the cookie.
   * @param options Specifies Domain, Path, Expires, Max-Age, Secure, and SameSite attributes. Set domain to 'auto' to use the broadest possible domain.
   * @param encode Controls whether the value is encoded with `encodeURIComponent`. Defaults to `true`.
   */
  function setCookie(name: string, value: string, options?: { domain?: string | 'auto', path?: string, 'max-age'?: number, expires?: string, secure?: boolean, samesite?: 'Strict' | 'Lax' | 'None' }, encode?: boolean): void;
  export = setCookie;
}

declare module 'setDefaultConsentState' {
  /**
   * Pushes a `default` consent command to the data layer, to be processed as soon as possible after the current event.
   * The update is guaranteed to be processed before any queued items in the data layer.
   * @param consentSettings An object that defines the default state for specified consent types, e.g., {'ad_storage': 'denied'}. Can also include 'region' and 'wait_for_update'.
   */
  function setDefaultConsentState(consentSettings: { [key: string]: 'granted' | 'denied' | string[] | number }): void;
  export = setDefaultConsentState;
}

declare module 'setInWindow' {
  /**
   * Sets the given value in the window at the given key.
   * @param key The key in the window to place the value at.
   * @param value The value to set in the window.
   * @param overrideExisting If `true`, sets the value regardless of whether a value is already present. Defaults to `false`.
   * @returns `true` if the value was set successfully, `false` otherwise.
   */
  function setInWindow(key: string, value: any, overrideExisting?: boolean): boolean;
  export = setInWindow;
}

declare module 'sha256' {
  /**
   * Calculates the SHA-256 digest of the input and invokes a callback with the digest.
   * @param input The string to calculate the hash for.
   * @param onSuccess Called with the resulting digest, encoded in base64 unless specified otherwise.
   * @param onFailure Called if an error occurs or if the browser lacks native support.
   * @param options Optional object to specify the output encoding ('base64' or 'hex').
   */
  function sha256(input: string, onSuccess: (digest: string) => void, onFailure?: (error: { name: string, message: string }) => void, options?: { outputEncoding?: 'base64' | 'hex' }): void;
  export = sha256;
}

declare module 'templateStorage' {
  /**
   * An object with methods for accessing template storage, which persists for the lifetime of the page.
   * Note: Unlike Web Storage, this API does not serialize data into strings; it stores and returns references.
   */
  const templateStorage: {
    /**
     * Retrieves an item from template storage.
     * @param key The key of the item to retrieve.
     */
    getItem(key: string): any;
    /**
     * Adds or updates an item in template storage.
     * @param key The key of the item to set.
     * @param value The value to store.
     */
    setItem(key: string, value: any): void;
    /**
     * Removes an item from template storage.
     * @param key The key of the item to remove.
     */
    removeItem(key: string): void;
    /**
     * Deletes all stored values for the template.
     */
    clear(): void;
  };
  export = templateStorage;
}

declare module 'toBase64' {
  /**
   * Encodes a string into a base64 representation. Supports unicode strings.
   * @param input The string to encode.
   */
  function toBase64(input: string): string;
  export = toBase64;
}

declare module 'updateConsentState' {
  /**
   * Pushes a consent `update` command to the data layer, to be processed as soon as possible after the current event.
   * The update is guaranteed to be processed before any queued items in the data layer.
   * @param consentSettings An object that updates the state for the specified consent types, e.g., {'ad_storage': 'granted'}.
   */
  function updateConsentState(consentSettings: { [key: string]: 'granted' | 'denied' }): void;
  export = updateConsentState;
}
