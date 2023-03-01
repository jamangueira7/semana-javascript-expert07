import Camera from "../../../lib/shared/camera.js";
import { supportsWorkerType } from "../../../lib/shared/util.js";
import Controller from "./controller.js";
import Service from "./service.js";
import View from "./view.js";

async function getWorker() {
    if(supportsWorkerType()) {
        console.log('support')
        return new Worker('./src/worker.js', { type: 'module' })
    }

    const workerMock = {
        async postMessage() {},
        onmessage(msg) {}
    }
    console.log('not support')
    return workerMock

}

const worker = await getWorker()
worker.postMessage('hey form factory')

const camera = await Camera.init()
const [rootPath] = window.location.href.split('/pages/')
const factory = {
    async initialize() {
        return Controller.initialize({
            view: new View(),
            service: new Service({})
        })
    }
}

export default factory