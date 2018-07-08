# Portal
My personal portal, helping me simplify my life. Or at least, that's the purpose :)


## Progress
Check out the [Trello board](https://trello.com/b/LlzGuRM3/portal).

## Architecture
[High level architecture diagram](https://www.lucidchart.com/documents/embeddedchart/e7931a1a-eb23-47c3-9201-74334bfb57c2)

### The general set-up
I expect that the funcionality of the portal will **change often. It adapts to my life**.

That why I have chosen to design the portal as microservices. The goal is to easily write new functionality and disable unused modules. This decision allows me to use different technologies, making it interesting to toy around with new technology hypes.

### Deployment
To run and deploy the modules, each module is wrapped in a Docker container. All containers can be started at the same time with Docker-compose.

### The front-end
**Every module will have it's own front-end**. This can be written in any technology.
The end user has one url: the url of front-end-core. This front-end asks the config module which modules exist, creates a menu bar and includes every module's front-end using i-frames.

This means that, for every module, a brand new Angular/React/... framework should be loaded, which is a serious downside. Since the front-end world is changing so rapidely, the big advantage is that I'm free to develop any module in a technology of my choice, which is interesting for me to toy around with new front-end technologies.

### Communication between modules
Since modules should be easily removed/replaced/introduced, it's important for modules to have as less dependencies on each other as possible. On the other hand, I expect the portal to be a smart, proactive system, which requires modules to be sharing data all the time.

**The preferred communication method is asynchronous, generic data exchange**. When something occurs that could be of interesting for other modules, the module is expected to publicize this information on the **Event topic**. Every other module that's interested will receive this information, doing something meaningful, or throwing the message away.

 **In case that synchronous communication is required**, for example for queries of other modules so that information can be shown in the front-end, **REST  webservices should be used**. 
