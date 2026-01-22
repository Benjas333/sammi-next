export namespace NOT_CONNECTED {
    let status: string;
    let description: string;
}
export namespace CONNECTION_ERROR {
    let status_1: string;
    export { status_1 as status };
    let description_1: string;
    export { description_1 as description };
}
export namespace SOCKET_EXCEPTION {
    let status_2: string;
    export { status_2 as status };
    let description_2: string;
    export { description_2 as description };
}
export namespace AUTH_NOT_REQUIRED {
    let status_3: string;
    export { status_3 as status };
    let description_3: string;
    export { description_3 as description };
}
export namespace REQUEST_TYPE_NOT_SPECIFIED {
    let status_4: string;
    export { status_4 as status };
    let description_4: string;
    export { description_4 as description };
}
export namespace ARGS_NOT_SPECIFIED {
    let status_5: string;
    export { status_5 as status };
    let description_5: string;
    export { description_5 as description };
}
export namespace ARGS_NOT_OBJECT {
    let status_6: string;
    export { status_6 as status };
    let description_6: string;
    export { description_6 as description };
}
export function init(): {
    NOT_CONNECTED: {
        status: string;
        description: string;
    };
    CONNECTION_ERROR: {
        status: string;
        description: string;
    };
    SOCKET_EXCEPTION: {
        status: string;
        description: string;
    };
    AUTH_NOT_REQUIRED: {
        status: string;
        description: string;
    };
    REQUEST_TYPE_NOT_SPECIFIED: {
        status: string;
        description: string;
    };
    ARGS_NOT_SPECIFIED: {
        status: string;
        description: string;
    };
    ARGS_NOT_OBJECT: {
        status: string;
        description: string;
    };
    init(): /*elided*/ any;
};
