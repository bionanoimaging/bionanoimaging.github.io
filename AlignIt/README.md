# AlignIt!

a VR/AR web app game for practising optical alignment

The game can be accessed under the followin links:

[Standard and Virtual Reality (VR) Version](https://rainerheintzmann.github.io/AlignIt/?mode=vr)

[Augmented Reality (AR) Version](https://rainerheintzmann.github.io/AlignIt/?mode=ar)

The game is organized in level, each of which consists of several consecutive alignment tasks. Their relevance is often explained via narrations.
By completing all tasks of a level, a score is obtained and entered into a global leaderboard (highscore), if you make it to the best 10 players.

Currently only a few levels available:
1. Level one teaches the user how to focus a plano-convex lens onto the screen. The various task increase in complexity starting from only allowing movement of the focus direction and ending with a lens that has 5 degrees of freedom. 
2. Level two teaches the importance of the optical axis and how to align it.
3. A rudimentary beam expander.
3. A Michelson interferometer. Note that interference fringes are only visible in the pro version.
4. A Mach-Zehnder interferometer. Note that interference fringes are only visible in the pro version.
5. Level three is currently not a real level, but it just presents all the currently implemented components which can be (mostly) moved freely.

## Keyboard control
In the plain mode on a computer, there are a few hotkeys available, if an optical component has been selected by clicking on it:
- "w" and "s" allows for fine-control of the pitch angle.
- "a" and "d" allows for fine-control of the yaw angle.
- "q" toggles the angular adjustment sensitivity by a factor of 256.
In VR mode the same controls are available via the small joystick on each controller. The "X" button toggles the sensitivity, whereas the "Y" button toggles the visibility of the laser beams.

## Features
- this game can be played on a PC, laptop, tablet or mobile phone
- Usernames can be provided via the web-adress line using the following argument `?user=myusername`, which is the name that may appear in the leaderboard.
- Plain 2D, VR and AR modes are supported (you may need to install google Chrome and enable the AR extension). To select a particular mode, use `?mode=plain`, `?mode=ar` or `?mode=vr` as arguments. See details below. If the VR mode is supported by your device this will be selected by default. 
- the scale can be varied via the `?scale=0.15`(default) argument. Try `?scale=1.0` to feel like an ant! Note that in VR mode the mesh on which you walk changes from the table (at scales > 0.5) to the tiled floor (at scales < 0.5). In AR mode the scale is fixed to 0.15. Note that several arguments can be appended using the `&` symbol, e.g. `?mode=ar&scale=1.0`.
- A number of environment files are avaiable via the `?env=` argument, using `?env=forest` (default), `?env=square`, `?env=astro`, `?env=room`
- The rendering can be switched to nicer textures using `?pbr=true`, but this degrades performance, which may lead to jittering.
- Currently supported optical components: Planoconvex and biconvex lenses, Laser, Screen, pinhole, iris-aperture, mirror, semi-reflective mirror
- Music (switchable)
- Narrations (switchable)
- Leaderboard
- Can parse user-defined levels via the ?levels=path_to_levels argument. See details below.
- To combined several arguments use the following syntax: `?user=fred&scale=0.7&mode=vr&levels=https://localhost:8000` or a different web-link in the `levels` argument. Note that, due to CORS policy, working with local test-levels requires to start a local http server with a python script as described [here](https://stackoverflow.com/questions/21956683/enable-access-control-on-simple-http-server).

## Define your own level
To define your own levels and task you can provide your own level files, each of which should consist of several tasks. You then need to host these levels somewhere on the web (or store them locally on your computer). There is no need to copy the AlignIt! sofware since you can provide the folder where your levels are stored via the ?levels=http:// arguments. E.g. if you stored your levels in the folder https://rainerheintzmann.github.io/AlignIt/levels for the username "someone" you should simply enter the following adress into your browser:

[https://rainerheintzmann.github.io/AlignIt/?user=someone&levels=https://rainerheintzmann.github.io/AlignIt/levels](https://rainerheintzmann.github.io/AlignIt/?user=someone&levels=https://rainerheintzmann.github.io/AlignIt/levels)

In this folder all the level files need to be called "lvl_1.json", "lvl_2.json" etc. They all need to be in JSON file format and follow the guidelines.
To get an idea about the format, which is pretty straight-forward, simply look at the existing levels
- [lvl_1.json](https://rainerheintzmann.github.io/AlignIt/lvl_1.json)
- [lvl_2.json](https://rainerheintzmann.github.io/AlignIt/lvl_2.json)
- [lvl_3.json](https://rainerheintzmann.github.io/AlignIt/lvl_3.json)
- And the example file with various components: [lvl_5.json](https://rainerheintzmann.github.io/AlignIt/testlevels/lvl_5.json)

The following key-words are useful for designing levels:
- "addComponent": adds a component to the currect setup for the next task
- "removeComponent": removes a particular component. The component is always adressed by its name
- "modifyComponent": modifies an existing component. Note that all properties are kept as they currently are, if no further statements are made.
If you want to reset the position, you need to state it.
- "resetComponent": resets the component to its original properties, including position and and angle.

All components have the possibility to specify degrees of freedom ("dof"). For those the following code applies:
- "X": movement along the X direction
- "Y": movement along the Y direction
- "Z": movement along the height direction
- "x": rotation around the X-axis
- "y": rotation around the Y-axis
- "z": rotation around the Z-axis
- "f": Some components such as the "Iris" have internal degrees of freedom. These can be fixed by using the letter "f" somewhere in the specification of the degrees of freedom ("dof").
- "s": enables "snap mode" for rotation, which limits them to 45 degree multiplies
- "S": enables "snap mode" for position, which limits them to be on an integer grid

## Components
Currently a number of components are supported, with their arguments exemplified in the list. All components support the arguments ("name": MyName, "position": [-4, 2], "rotation": [0,0,0], "dof": "XYZxyzSs"). Note that postion accepts a 2D position on the table, rotation accepts eiter a simple value referring to the rotation around the Y-axis or a vector, referring to three Euler angles. For "dof" see above. As for the dimensions it is useful to know, that the diameter of a lens corresponds to the value 1.0, the Post height is 2.0 and the beam heigth over a post is 0.5. The distance of the holes on the table is also 1.0. In real space units, 1.0 corresponds roughly to 5 cm.

List of possible components:
- Laser ("rays": [0,0], "diameter": 0.3), the two numbers refer to the number or radial layers and azimuthal rays in each layer. "diameter" refers to the total diameter of the outer layer of laser rays.
- Lens ("r1": 1.0, "r2": 2.0,), with r1 and r2 referring to the radius of curvature of each lens surface. If not given the value of zero is assumed, which really means infinite, i.e. a flat surface. Note that also negative values are allowed, referring to a concave surface.
- Mirror
- Beamsplitter
- Grating ("pitch"), the pitch corresponding to the grating pitch in µm.
- Pinhole ("diameter")

Some components (e.g. Iris) also support the  argument "success" (with the parameter "diameter"):

"success": {"diameter": 0.05}

meaning that this maximum diameter has to be adjusted by the user for this component to turn green and thus contribute to the "components" bar which needs all such components to be have reached their individual "success" criteria.

## License
Currently the software is reased under the [Commons Attribution-NonCommercial-NoDerivs}(https://creativecommons.org/licenses/by-nc-nd/4.0/) (CC-BY-NC-ND) License.
Classical geometrical optics alignment can currently be used free of charge. For interference-based feature support (Mach-Zehnder, Michelson, Shear-Plates), please contact the author (Rainer Heintzmann) using his surname at gmail.com.
