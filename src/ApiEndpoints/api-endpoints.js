export const baseUrl = "";

createRequestObject = (url, data, method) => {
    let template = {};
    template.url = url;
    template.method = method ? method : "GET";
    if (data) {
        template.data = data;
    }
    return template;
}


const ScanMOdule = {
    scan=() => createRequestObject("/scan")
}

const ApiEndPoints = {
    ScanMOdule
}

export default ApiEndPoints;