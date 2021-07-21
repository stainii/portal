# portal-image
Set of Azure functions for image manipulation and image storage

## Functions
### Facade
#### What does it do?
Facade that allows you to 

1) store an image after doing zero, one or multiple manipulations.
2) retrieve cached images, eventually executing additional manipulations

#### How to call it? TODO
HTTP POST http://localhost:7071/api/facade

With a HTTP POST request, you provide the original image + json declaring what manipulations you request.
  
### Thumbnail
#### What does it do?
Creates a thumbnail of a given image

#### How to call it?
HTTP POST http://localhost:7071/api/thumbnail

##### Get parameters
| parameter | example | required |
| --------- | ------- | -------- |
| width     | 100     | true     |
| height    | 100     | false    |
| crop      | true    | false    |

##### Headers
| parameter | example | required |
| --------- | ------- | -------- |
| Content-Type | should always be application/octet-stream | true |

##### Body
An image, as binary

## How to develop?
### Install dependencies
Before you can get started, you should install
 * [.NET Core 2.1](https://go.microsoft.com/fwlink/?linkid=2016373).
 * [Node.JS](https://go.microsoft.com/fwlink/?linkid=2016195)
 * [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/run-azure-cli-docker?view=azure-cli-latest)
 * [SQL Express](https://www.microsoft.com/en-us/download/details.aspx?id=42299)
 * [Azure Storage Emulator (Windows, for other operating systems look for Azurite)](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator)

Run the following command to install the Core Tools package:

```
npm install -g azure-functions-core-tools
```

### Create a Azure function
To create a function, run the following command:

```
func new
```

This will prompt you to choose a template for your function. We recommend HTTP trigger for getting started.

### Run your Azure function project locally
First, run the Azure storage emulator. Then, run the following command to start your function app:

```
func  start
```

The runtime will output a URL for any HTTP functions, which can be copied and run in your browser's address bar.

### Deploy your code to Azure
To publish your Functions project into Azure, enter the following commands:

````
az login
func azure functionapp publish portal-image
````

You may be prompted to sign into Azure. Follow the onscreen instructions.