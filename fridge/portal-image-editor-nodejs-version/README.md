# Portal image editor

A REST service providing image editing capabilities.

## Endpoints
**POST /resize/**

Resize an image.

*Form data:*

|field name | type   | required | meaning |
|-----------|--------| -------- |-----|
| image     | file   | yes      | |
| width     | number | yes      | required width in pixels |
| height    | number | yes      | required height in pixels |
| cropIfNecessary | boolean | yes  | What if I request dimensions 100x100 pixels, but my image has a ratio of 100 x 500 pixels? When true, you'll get a image of 100x100 pixels, and everything that didnt fit got cut off. If false, the ratio will be respected an image of 20x100 will be returned. |

**POST /composite/**

*Form data:*

|field name       | type    | required | meaning |
|---------------- | --------| -------- | ------- |
| backgroundImage | file    | yes | The image that should be on the background. Also, the size of the returned image will be the same as the size of this background image. |
| foregroundImage | file    | yes | The image that should be put on top. |
| x               | number  | yes | The x position in pixels where the foreground image should be put. |
| y               | number  | yes | The y position in pixels where the foreground image should be put. |

## Development
### How to build?
`docker build . --tag=stainii/portal-image-editor:[version]`

### How to publish?
`docker login`

`docker push stainii/portal-image-editor:[version]`

### Release
TODO