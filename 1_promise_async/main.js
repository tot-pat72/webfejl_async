const service = new Service()
const dataViewController = new DataViewController()

service.init().then((value) => {
    dataViewController.renderData(value)
})

service.realinit(1).then((value)=>{
    dataViewController.renderData(value);
});

service.realinit(3).catch((error)=>{
    dataViewController.renderError(error);
});