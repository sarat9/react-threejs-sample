-----------------------------------------------------------

# react-threejs

Errors faced while playing around and fixes for the same


### React ThreeJS Reference

* [three.js](https://threejs.org/)  - three.js website
* [three.js Examples](https://threejs.org/examples/)  - Sample models for threejs


### 1
Error:

Error while importing the glb model file.

ERROR in ./assets/models/Soldier.glb 1:4
Module parse failed: Unexpected character '' (1:4)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
(Source code omitted for this binary file)
 @ ./animations/SoldierMachineAnimation/index.jsx 9:0-60 56:16-27
 @ ./layouts/dashboard/DashboardLayout.jsx
 @ ./layouts/home/HomeLayout.jsx
 @ ./layouts/App.jsx
 @ ./entry.jsx
 @ multi ./entry.jsx


Solution:
Add the following rule in your webpack.config to load glb files.

```sh

module:
    {
        rules:
        [
            {
                test: /\.(glb|gltf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/models/'
                        }
                    }
                ]
            },
        ]
    }

```
or build the app and Host it on Express.js or so












------------------------------------------------------------