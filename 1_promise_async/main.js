const service = new Service()
const dataViewController = new DataViewController()

service.init().then((value) => {
    dataViewController.renderData(value)
})