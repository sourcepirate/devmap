import EventEmitter from 'events';

class ServiceLoader extends EventEmitter {
    constructor(scriptname) {
        super();
        this.script = scriptname;
        const onSuccess = this.onSuccess.bind(this);
        const onError = this.onError.bind(this);
        navigator.serviceWorker.register(scriptname)
            .then((reg) => onSuccess(reg))
            .catch((err) => onError(err));
    } 

    onSuccess(reg) {
        console.log(reg.waiting);
        console.log(reg.installing);
        let self = this;
        console.log("registed");
        if (!navigator.serviceWorker.controller)
            return;

        if (reg.waiting) {
            self.emit('update', reg.waiting);
            return;
        }
        if (reg.installing){
            let track = this.onTrack.bind(this,  reg.installing);
            track();
            return;
        }

        reg.addEventListener('updatefound', function(){
            console.log("update found");
            self.onTrack(reg.installing);
        });

        reg.addEventListener('controllerchange', function(){
            window.location.reload();
        });
    }

    onError(err) {
        console.error(err);
    }

    onTrack(event){
        var self = this;
        console.log("tracking");
        event.addEventListener('statechange', function(){
            if (event.state == 'installed'){
                self.emit('installed', event);
            }
         });
    }

}

export default ServiceLoader;