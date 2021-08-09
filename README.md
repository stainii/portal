# Portal
My personal portal, helping me simplify my life. Or at least, that's the purpose :)

## How to run this application?
TODO

`multipass mount /my-shared-folder microk8s-vm`

`sudo microk8s enable dns`  
`sudo microk8s enable traefik`   
`sudo microk8s enable ingress`  

## Architecture
![High-level-architecure](documentation/high-level-architecture.png)

### Why microservices?
I expect that the functionality of the portal will **change often. It adapts to my life**.

That why I have chosen to design the portal as microservices. The goal is to easily write new functionality and disable unused modules. This decision allows me to use different technologies, making it interesting to toy around with new technology hypes.

### Communication between modules
Since modules should be easily removed/replaced/introduced, it's important for modules to have as less dependencies on each other as possible. On the other hand, I expect the portal to be a smart, proactive system, which requires modules to be sharing data all the time.

**The preferred communication method is asynchronous, generic data exchange**. When something occurs that could be of interesting for other modules, the module is expected to publicize this information on the **Event topic**. Every other module that's interested will receive this information, doing something meaningful, or throwing the message away.

**In case that synchronous communication is required**, for example for queries of other modules so that information can be shown in the front-end, **REST  webservices should be used**. 

### The front-end
There is a **dedicated front-end module** which contains the front-end components for every backend module.

While this seems contradictory to backend's microservice approach, I have [good reasons](https://github.com/stainii/portal-front-end) for this set-up. This thought process is written out in [the README file of the front-end-module](https://github.com/stainii/portal-front-end).

## Development
TODO

You can run the Spring Boot applications from your IDE and run the databases/Eureka/... in Docker.
