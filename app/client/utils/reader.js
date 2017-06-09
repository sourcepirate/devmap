export function reader(file){
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.readAsText(file);
        fr.onload = function(){
            resolve(this.result);
        }
        fr.onerror = function(e){
            reject(e);
        }
    });
}