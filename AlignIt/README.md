# AlignIt!

a VR/AR web app game for practising optical alignment

The game can be accessed under the followin links:

[Standard and Virtual Reality (VR) Version](https://www.nanoimaging.de/AlignIt/?mode=vr)

[Augmented Reality (AR) Version](https://www.nanoimaging.de/AlignIt/?mode=ar)

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
- "b" toggles the rendering of the laser beams (if not deactivated by the level).
- "l" switches the laser off/on.
- "+" presses the green "Done" button
- "u" brings up a menu to enter the user-name.
- "n" toggles the narrations off/on. Sometimes movements are blocked while the narration is running, but possible in pause.
- "m" toggles the music off/on.
- "p" brings up a menu to enter the password enabling interference features.
In rotation mode:
- "w" and "s" allows for fine-control of the pitch angle.
- "a" and "d" allows for fine-control of the yaw angle.
- "q" toggles the angular adjustment sensitivity by a factor of 256.
In translation mode (for the activated axes):
- "w" and "s" allows for fine-control of the x-movement over the table.
- "a" and "d" allows for fine-control of the y-movement over the table.
- "q" toggles the adjustment sensitivity by a factor of 256.
In VR mode the same controls are available via the small joystick on each controller. The "A" button toggles the sensitivity, whereas the "B" button toggles the visibility of the laser beams.
The "X"-button toggles the visibility of the screen (which is in your left hand), the "Y" button is equivalent to the green "Done" button on the screen

## Features
- this game can be played on a PC, laptop, tablet or mobile phone
- Usernames can be provided via the web-adress line using the following argument `?user=myusername`, which is the name that may appear in the leaderboard.
- Plain 2D, VR and AR modes are supported (you may need to install google Chrome and enable the AR extension). To select a particular mode, use `?mode=plain`, `?mode=ar` or `?mode=vr` as arguments. See details below. If the VR mode is supported by your device this will be selected by default. 
- the scale can be varied via the `?scale=0.15`(default) argument. Try `?scale=1.0` to feel like an ant! Note that in VR mode the mesh on which you walk changes from the table (at scales > 0.5) to the tiled floor (at scales < 0.5). In AR mode the scale is fixed to 0.15. Note that several arguments can be appended using the `&` symbol, e.g. `?mode=ar&scale=1.0`.
- A number of environment files are avaiable via the `?env=` argument, using `?env=forest` (default), `?env=square`, `?env=astro`, `?env=room`
- The rendering can be switched to nicer textures using `?pbr=true`, but this degrades performance, which may lead to jittering.
- Currently supported optical components: Planoconvex and biconvex lenses, Laser, Screen, pinhole, iris-aperture, mirror, semi-reflective mirror
- Music (switchable). 
- Narrations (switchable). 
- Leaderboard
- Can parse user-defined levels via the ?levels=path_to_levels argument. See details below.
- To combined several arguments use the following syntax: `?user=fred&scale=0.7&mode=vr&levels=https://localhost:8000` or a different web-link in the `levels` argument. Note that, due to CORS policy, working with local test-levels requires to start a local http server with a python script as described [here](https://stackoverflow.com/questions/21956683/enable-access-control-on-simple-http-server).

## Define your own level
To define your own levels and task you can provide your own level files, each of which should consist of several tasks. You then need to host these levels somewhere on the web (or store them locally on your computer). There is no need to copy the AlignIt! sofware since you can provide the folder where your levels are stored via the ?levels=http:// arguments. E.g. if you stored your levels in the folder https://rainerheintzmann.github.io/AlignIt/levels for the username "someone" you should simply enter the following adress into your browser:

[https://www.nanoimaging.de/AlignIt/?user=someone&levels=https://rainerheintzmann.github.io/AlignIt/levels](https://rainerheintzmann.github.io/AlignIt/?user=someone&levels=https://rainerheintzmann.github.io/AlignIt/levels)

In this folder all the level files need to be called "lvl_1.json", "lvl_2.json" etc. They all need to be in JSON file format and follow the guidelines.
To get an idea about the format, which is pretty straight-forward, simply look at the existing levels

- [lvl_1.json](https://www.nanoimaging.de/AlignIt/lvl_1.json)
- [lvl_2.json](https://www.nanoimaging.de/AlignIt/lvl_2.json)
- [lvl_3.json](https://www.nanoimaging.de/AlignIt/lvl_3.json)
- And the example file with various components: [lvl_5.json](https://www.nanoimaging.de/AlignIt/testlevels/lvl_5.json)

## Steps
Each level description in the json file corresponding to a level consists of steps. Each step needs to be one of the following entries:
- `setObserverPosition`: allows to force the observer to an initial position. Allowed (optional) arguments are `position` defining the new observer position coordinates and `look_at` defining where to first look (default is [0,0] at the beam height). Note that every reset of the level will also force this action to be taken.
- `add_component`: adds a new component to the current task. It supports the tags `type`, `name` and others (see below)
- `remove_component`: removes an existing component
- `modify_component`: modifies a component. This actually removes the old component and creates a new one in its place.
- `rename_component`: renames a component. From now on it needs to be referred to by the new name.
- `reset_component`:  places the component in its initial configuration cancelling modifications by the user.
- `task`: defines a task to be performed (see details below).
Components (see detals below) are always identified by the name you give to them

## Components
Currently a number of components are supported, with their arguments exemplified in the list. All components support the arguments ("name": MyName, "position": [-4, 2], "rotation": [0,0,0], "dof": "XYZxyzSs"). Note that postion accepts a 2D position on the table, rotation accepts eiter a simple value (in degreess) referring to the rotation around the Y-axis or a vector, referring to three Euler angles. For "dof" see above. As for the dimensions it is useful to know, that the diameter of a lens corresponds to the value 1.0, the Post height is 2.0 and the beam heigth over a post is 0.5. The distance of the holes on the table is also 1.0. In real space units, 1.0 corresponds roughly to 5 cm.

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

### List of possible components:

- Laser ("rays": [0,0], "diameter": 0.3), the two numbers refer to the number or radial layers and azimuthal rays in each layer. "diameter" refers to the total diameter of the outer layer of laser rays.
- Lens ("r1": 1.0, "r2": 2.0, "wedge_angle": 0.0), with r1 and r2 referring to the radius of curvature of each lens surface. If not given the value of zero is assumed, which really means infinite, i.e. a flat surface. Note that also negative values are allowed, referring to a concave surface. If "trace_reflection" is set to `true`, weak reflection beams will be launched. "wedge_angle" (only for r0=0.0 and r1=0.0) allows to create a weak prism, e.g. for shear-plates. "wedge_lambda" is an alternative method, which scales slightly better to show interference fringes for small angles, to be used in shear-plates. If `cylinder` is set to `true`, the lens will be interpreted as a cylinder lens. The refrative index has the default 1.52 but can be specified (e.g. "refractive_index": 1.33). If a range ("refractive_index": [1.0, 1.6]) is specified, a slider will be diplayed allowing to change the refractive index. A third value can specify its initial setting.

- Mirror
- Beamsplitter
- Grating ("pitch"), the pitch corresponding to the grating pitch in µm.
- Pinhole ("diameter")
- Iris ("diameter", "success"), if the "success" parameter is provided (e.g. "success": {"diameter": 0.03},) the adjustable diameter needs to be below the stated value, to contribute to an overall success in the task (see components bar). If a success value is provided the minimum size is automatically limited to that value.
- Slit ("diameter", "success"), if the "success" parameter is provided (e.g. "success": {"diameter": 0.03},) the adjustable diameter needs to be below the stated value, to contribute to an overall success in the task (see components bar). If a success value is provided the minimum size is automatically limited to that value.
- DualPinhole ("diameter", "separation", "launches"), where "separation" indicates the distance between the two pinholes. If "lauches" is `true` this pinhole will (like a screen) analyse the impinging beams and launch two beams from its center.
- Screen ("success", "target"), the "success" of the screen is often the most important component to fullfill a given task. The following options are supported for screen "success":
    - "Num": the minimal number of beams hitting the screen. If not specified it is allumed that this corresponds to the number of beams launched by the laser.
    - "Std": the maximally allowed standard deviation of the spot. This is also shown by the attached indicator bar.
    - "PosX": maximal lateral distance to the center of the screen. This is also shown by the attached indicator bar.
    - "PosY": maximal vertical distance to the center of the screen. This is also shown by the attached indicator bar.
    - "Curv": maximally allowed curvature. If not provided, any curvature is accepted. No indicator bar is provided.
e.g. "success": {"Std": 0.004, "PosX": 0.005, "PosY": 0.005}
if "target" is specified (e.g. true) a screen target is drawn. If "target" is set to "line", "lineh" or "linev" a (horizontal or vertical) line-target is drawn.
All features can be started by a "_" (e.g. "_Std": 0.004), which disables their display on the indicators panel, but they still need to be fulfilled. In this case the panel only turns green if all of these measures are fulfilled and no indication is given, which one may still be lacking.
Some components (e.g. Iris) also support the  argument "success" (with the parameter "diameter"):
    - "success": {"diameter": 0.05}
    meaning that this maximum diameter has to be adjusted by the user for this component to turn green and thus contribute to the "components" bar which needs all such components to be have reached their individual "success" criteria.
Note that the user interface panel is usually attached to the first screen, but you can also supply
- PanelPost  which serves as a (potentially movable) post on which the panel is placed. Note that in VR the presence of the left control takes over the panel.

## Tasks
tasks are defined by a `task` json tag within the list of other actions. This will interrupt the flow until this task is solved. The task is solved when all the components present on the table have been sucessfully solved. `task` supports the following tags:

- `instruction`: The text entered here will be shown on the screen until this task is solved
- `score`: The maximum score to earn for solving this task
- `music`: with the fields `link` for the link to the narration file, `credits` for the text to display for credits.
- `narration`: with has the fields `link` for the link to the narration file, `credits` for the text to display for credits and optionally `force`, which will prevent movement user interaction until the sound was played fully.
- `showbeams`: if this optional boolean tag is provided the state of the `Beams` button is forced to the value given here and the button is disabled for this task.
- `focus`, `focus1`, `focus2`: if true both focal planes or a specific focal plane can optionally be shown.
- `principle`, `principle1`, `principle2`: if true both priciple planes or a specific principle plane can optionally be shown.
- `showplanes`: if true, the aforementioned planes will be shown on start of the task (they can still be switched on and off).
- `final`: can be present to indicate that this is the final task of this level

## Visual Appearance
There are some html-query parameters, which modify the visual appearance, rendering quality and rendering speed:
    - `lens=true`: switches to a realistic rendering of the lenses. `lens=all` has the best rendering, including also other meshes in the lens effects.
    - `pbr=true`: renders the posts in a nicer finish
    - `fps=true`: shows the frames per second `fps` in the top right corner
    - `env=name`: changes the background setting. Allowed entries for `name` are "forest", "night", "room", "astro"
    - `teleport`: `true` or `false` enables/disables the teleportation in VR mode, switching to a moving motion (beware motion thickness!). `off` disables all movemnt in VR mode (recommended for absolute beginners)
Remember to use them like in this example: `?lens=true&pbr=true&env=night`.

## License
Currently the software is reased under the [Commons Attribution-NonCommercial-NoDerivs}(https://creativecommons.org/licenses/by-nc-nd/4.0/) (CC-BY-NC-ND) License.
Classical geometrical optics alignment can currently be used free of charge. For interference-based feature support (Mach-Zehnder, Michelson, Shear-Plates) and more realistic lens-rendering, please contact the author (Rainer Heintzmann) using his surname at gmail.com.
