
export default class ResponseStruct {
    status;
    statusText;
    response;
    error;
    constructor(status, statusText, response, error) {
        this.status = status ? status : "";
        this.statusText = statusText ? statusText : "";
        this.response = response ? response : ""
        this.error = error ? error : ""
    }

}