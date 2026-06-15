# AlignIt

a VR/AR web app game for practising optical alignment

The game can be accessed under the followin links:

[Standard and Virtual Reality (VR) Version](https://www.nanoimaging.de/AlignIt/?mode=vr)

[Augmented Reality (AR) Version](https://www.nanoimaging.de/AlignIt/?mode=ar)

The game is organized in levels, each of which consists of several consecutive alignment tasks. Their relevance is often explained via narrations.
By completing all tasks of a level, a score is obtained and entered into a global leaderboard (highscore), if you make it to the best 10 players.

## Premium Features

Most features of this game can be used in the basic version, free of charge. However, some premium features require to purchase a license.
Such features include:
- Beam Interference. Interferometers such as the Michelson and Mach-Zehnder Interferometer only work properly in premium mode.
- Camera. The camera allows to image samples in a microcope mode. Without premium mode activated, only a screen is visible instead of a camera with a display.
- Editor. The level editor can be tried for free. However, saving your edits is only possible in premium mode.
- Realistic Lens rendering. In premium mode a special (albeit slower) mode of lens rendering can be activated, which renders lenses with close-to real properties. This includes being able to use a lens as a magnifying glass as the observer.

However, most features including ray tracing and all elements work also fine in the basic mode and most levels can be played in basic mode.

## Levels

Currently only a few levels available:

1. Level one teaches the user how to focus a plano-convex lens onto the screen. The various task increase in complexity starting from only allowing movement of the focus direction and ending with a lens that has 5 degrees of freedom.
2. Level two teaches the importance of the optical axis and how to align it.
3. A rudimentary beam expander to teach collimation.
4. A Michelson interferometer (premium only). Note that interference fringes are only visible in the pro version.
5. A Mach-Zehnder interferometer (premium only). Note that interference fringes are only visible in the pro version.
6. Level three is currently not a real level, but it just presents all the currently implemented component types which can be (mostly) moved freely.

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
- Currently supported optical component types via the `component_type` tag are: Planoconvex and biconvex lenses, Laser, Screen, pinhole, iris-aperture, mirror, semi-reflective mirror, fibre launch. See below for details.
- Music (switchable).
- Narrations (switchable).
- Leaderboard
- Can parse user-defined levels via the ?levels=path_to_levels argument. See details below.
- To combined several arguments use the following syntax: `?user=fred&scale=0.7&mode=vr&levels=https://localhost:8000&level=3` or a different web-link in the `levels` argument. Note that, due to CORS policy, working with local test-levels requires to start a local http server with a python script as described [in this document](https://stackoverflow.com/questions/21956683/enable-access-control-on-simple-http-server).

## Define your own level

To define your own levels and task you can provide your own level files, each of which should consist of several tasks. You then need to host these levels somewhere on the web (or store them locally on your computer). There is no need to copy the AlignIt! sofware since you can provide the folder where your levels are stored via the ?levels=http:// arguments. E.g. if you stored your levels in the folder [https://rainerheintzmann.github.io/AlignIt/levels](https://rainerheintzmann.github.io/AlignIt/levels) for the username "someone" you should simply enter the following adress into your browser:

[https://www.nanoimaging.de/AlignIt/?user=someone&levels=https://rainerheintzmann.github.io/AlignIt/levels](https://rainerheintzmann.github.io/AlignIt/?user=someone&levels=https://rainerheintzmann.github.io/AlignIt/levels)

In this folder all the level files need to be called "lvl_1.json", "lvl_2.json" etc. They all need to be in JSON file format and follow the guidelines.
To get an idea about the format, which is pretty straight-forward, simply look at the existing levels

- [lvl_1.json](https://www.nanoimaging.de/AlignIt/lvl_1.json)
- [lvl_2.json](https://www.nanoimaging.de/AlignIt/lvl_2.json)
- [lvl_3.json](https://www.nanoimaging.de/AlignIt/lvl_3.json)
- And the example file with various component types: [lvl_5.json](https://www.nanoimaging.de/AlignIt/testlevels/lvl_5.json)

## Steps

Each level description in the json file corresponding to a level consists of steps. Each step needs to be one of the following entries:

- `setObserverPosition`: allows to force the observer to an initial starting position. Allowed (optional) arguments are `position` defining the new observer position coordinates and `look_at` defining where to first look (default is [0,0] at the beam height). Note that every reset of the level will also force this action to be taken.
- `add_component`: adds a new component to the current task. It supports the tags `type`, `name` and others (see below)
- `remove_component`: removes an existing component
- `modify_component`: modifies a component. This actually removes the old component and creates a new one in its place.
- `rename_component`: renames a component. From now on it needs to be referred to by the new name.
- `reset_component`:  places the component in its initial configuration cancelling modifications by the user.
- `task`: defines a task to be performed (see details below).
Components (see detals below) are always uniquely identified by the name you give to them

## Components

Currently a number of component types are supported, with their arguments exemplified in the list. All component types support the arguments ("component_type": ComponentType,"name": MyName, "position": [-4, 2], "rotation": [0,0,0], "dof": "XYZxyzSs"). Note that position accepts a 2D position on the table, rotation accepts eiter a simple value (in degreess) referring to the rotation around the height-axis or a vector, referring to three Euler angles. For "dof" see above. As for the dimensions it is useful to know, that the diameter of a lens corresponds to the value 1.0, the Post height is 2.0 and the beam heigth over a post is 0.5. The distance of the holes on the table is also 1.0. In real space units, 1.0 corresponds roughly to 5 cm.

All components have the possibility to specify degrees of freedom ("dof"). For those the following code applies:

- "X": movement along the X direction
- "Y": movement along the Y direction
- "Z": movement along the height direction
- "x": rotation around the X-axis
- "y": rotation around the Y-axis
- "z": rotation around the Z-axis
- "f": Some component types such as the "Iris" have internal degrees of freedom. These can be fixed by using the letter "f" somewhere in the specification of the degrees of freedom ("dof").
- "s": enables "snap mode" for rotation, which limits them to 45 degree multiplies
- "S": enables "snap mode" for position, which limits them to be on an integer grid

### List of possible component types

#### Light Sources

- `Laser`: Coherent light source. Arguments:
  - `rays`: [radial_layers, azimuthal_rays] - beam structure (e.g., [2,4] = 2 radial layers with 4 azimuthal rays each)
  - `diameter`: total diameter of outer laser ray layer (default 0.3)
  - `power`: brightness/intensity (default 1.0)
  - `divergence`: radial beam divergence in radians (default 0.0)
  - `wavelength`: wavelength in nanometers (default 488 nm)
  
- `Lightsource`: Extended incoherent light source with divergence. Same arguments as Laser, typically used with larger `divergence` values (e.g., 0.0875 rad).

- `Sample`: Light-emitting sample slide. Additional arguments:
  - `design`: type identifier (e.g., "Slide")
  - `texture`: image file path for sample texture
  - `texture_zoom`: zoom factor for texture display
  - `launches`: if `true`, emits rays when illuminated
  - `dir_em`: emission direction vector
  - `drift`: enables drift animation
  - `wavelength`: emitted light wavelength

#### Optical Elements

- `Lens`: Plano-convex or biconvex lens. Arguments:
  - `r1`, `r2`: radii of curvature for each surface (0 = infinite/flat, negative = concave)
  - `thickness`: lens thickness (default 0.3)
  - `wedge_angle`: prism angle for shear-plates (only when r1=r2=0)
  - `wedge_lambda`: alternative wedge parameter for interference fringes
  - `cylinder`: if `true`, creates cylinder lens
  - `refractive_index`: material index (default 1.52; array [min,max,initial] creates slider)
  - `reflectivity1`, `reflectivity2`: surface reflectivity (default 0.04)
  - `trace_reflection`: if `true`, launches weak reflected beams
  - `principle1`, `principle2`, `focus1`, `focus2`: show/hide optical planes
  
- `Objective`: Microscope objective lens. Arguments:
  - `focal_length`: focal distance (e.g., 0.01 m)
  - `principle1`, `principle2`, `focus1`, `focus2`: show/hide optical planes

- `Mirror`: Flat or curved mirror. Arguments:
  - `r1`: radius of curvature (optional)
  - `reflectivity`: reflection coefficient (default 1.0)
  - `trace_reflection`: if `true`, launches secondary reflection beams
  - `scan_angle`, `scan_period`, `scan_type` ("sawtooth"), `scan_cycles`: scanning mirror dynamics

- `Beamsplitter`: Semi-transparent mirror. Arguments:
  - `reflectivity`: transmission/reflection ratio (default 0.5)
  - `trace_reflection`: if `true`, traces both transmitted and reflected beams
  - `dichromatic`: dichromatic coating mode
  - `scan_angle`, `scan_period`, `scan_type`, `scan_cycles`: scanning behavior
  - *Note*: "Filter" type uses same geometry but different material properties

- `Grating`: Diffraction grating. Arguments:
  - `pitch`: grating pitch in micrometers

#### Apertures & Stops

- `Pinhole`: Pinhole aperture. Arguments:
  - `diameter`: aperture diameter (default 0.05)
  - `launches`: if `true`, launches rays when hit by beam
  - `rays`: [rings, positions_per_ring] for launched rays (e.g., [1,4])
  - `NA`: numerical aperture of outgoing beam (ignores incoming convergence)
  - `separation`: offset from center
  - `launch_power`: power of launched beams

- `DualPinhole`: Two-pinholes aperture (Young's experiment). Arguments:
  - `diameter`: individual pinhole diameter
  - `separation`: distance between pinholes
  - `launches`: if `true`, launches two beams from center
  - `rays`, `NA`, `launch_power`: same as Pinhole

- `Iris`: Adjustable circular aperture. Arguments:
  - `diameter`: current aperture size
  - `success`: {"diameter": max_size} - completion criterion when aperture < max_size

- `Slit`: Adjustable rectangular slit. Arguments:
  - `diameter`: slit width
  - `success`: {"diameter": max_width} - completion criterion

#### Detection & Imaging

- `Screen`: Detection screen with measurement capabilities. Arguments:
  - `target`: shows target pattern (`true`, "line", "lineh", "linev")
  - `design`: "Camera" (monochrome) or "ColorCamera" for premium camera mode
  - `success`: measurement criteria (see Screen Success Criteria below)

- `FibreCouple`: Fiber optic coupler / fiber end. Arguments:
  - `NA`: numerical aperture (default 0.05)
  - `diameter`: fiber core diameter (default 0.3)
  - Creates spline-shaped fiber bundle connecting launch and coupling points

- `PanelPost`: UI panel mounting post. Arguments:
  - `target`: if `true` (default), panel is created
  - Used only when left VR controller is absent; otherwise controller takes over panel

#### Common Component Arguments

All components support these base arguments:
- `name`: unique identifier (e.g., "L1", "M1", "S1")
- `position`: [x, z] coordinates on table (in units, 1 unit ≈ 5 cm)
- `height`: vertical position (post height = 2.0 units)
- `rotation`: rotation [rx, ry, rz] in degrees or single value for z-axis
- `dof`: degrees of freedom string (see DOF section above)
- `limits`: per-axis movement limits [[min_x, max_x], [min_y, max_y], ...]
- `displace`: offset parameter for certain components

#### Screen Success Criteria

Screens support detailed success measurement:
- `Num`: minimum number of beams hitting screen (default = launched beams)
- `Std`: maximum allowed spot standard deviation
- `Power`: minimum required beam power/integral intensity
- `PosX`: maximum lateral distance from center (x-axis)
- `PosY`: maximum vertical distance from center (y-axis)
- `Curv`: maximum allowed beam curvature
- `DeltaX`, `DeltaY`: maximum beam separation/distance
- Prefix with "_" (e.g., "_Std") to hide indicator but keep requirement

Example: `"success": {"Std": 0.004, "PosX": 0.005, "_PosY": 0.005}` shows indicators for Std and PosX, but silently enforces PosY.
  Some component types (e.g. Iris, Slit) also support the "success" argument with "diameter" parameter:
  - `"success": {"diameter": 0.05}`
    The maximum aperture size must be achieved for the component to turn green and contribute to the "components" completion bar. All components with success criteria must be satisfied for level progression.

**Note on UI Panel:** The user interface panel is automatically attached to the first Screen component. You can explicitly place it using `PanelPost` component type, which creates a movable post for the panel. In VR mode, if the left controller is present, it takes over panel display instead of any PanelPost.

## Tasks

Tasks are defined by a `task` JSON step within the level's steps array. This interrupts normal flow until all components' success criteria are met. The task supports these properties:

- `instruction`: Text displayed to guide the player until task completion
- `score`: Maximum points available for solving this task
- `music`: Background music object with:
  - `link`: URL/path to audio file (m4a, mp3)
  - `credits`: Attribution text displayed in credits
- `narration`: Spoken instructions object with:
  - `link`: URL/path to narration audio file
  - `credits`: Narrator attribution
  - `force`: If `true`, blocks user interaction until narration completes
- `question`: Alternative to instruction; used for quiz-style tasks
- `answers`: Array of possible answers for question-based tasks
- `showbeams`: Boolean; forces laser beam visibility state and disables the Beams button
- `showplanes`: If `true`, shows optical planes on startup (can be toggled during task)
- `focus`, `focus1`, `focus2`: Show focal planes (both, or specific one numbered 1/2)
- `principle`, `principle1`, `principle2`: Show principal planes (both, or specific one)
- `final`: Flag indicating this is the last task in the level

Example task step:
```json
{
  "type": "task",
  "name": "Focus the Lens",
  "instruction": "Align and focus the lens onto the screen",
  "score": 100,
  "showbeams": true,
  "focus1": true,
  "narration": {
    "link": "narrations/task1_focus.m4a",
    "credits": "Dr. Smith"
  }
}
```

### Additional Step Types

Beyond `addComponent` and `task`, levels support these step types:

- `modifyComponent`: Changes properties of an existing component (removes and recreates it)
- `removeComponent`: Deletes a component by name
- `resetComponent`: Returns component to initial position/rotation/configuration
- `renameComponent`: Changes component's name (must use new name thereafter)
- `solution`: Defines target configuration for hint animations
  - Specify `position`, `rotation`, `height` as target values
- `activate`: Changes degrees of freedom (DOF) of a component mid-task
  - Example: `{"dof": "XYZxyz"}` unlocks full 6-DOF movement
- `setObserverPosition`: Sets camera starting position
  - `position`: [x, z] coordinates for observer location
  - `look_at`: Target point to view (default: [0,0] at beam height)
- `addBaseMesh`: Adds additional base meshes to the optical table
- `addLensMesh`: Adds extra meshes for realistic lens rendering

## Visual Appearance & Performance

HTML query parameters modify visual appearance, rendering quality, and performance:

| Parameter | Values | Default | Description |
|-----------|--------|---------|-------------|
| `mode` | `plain`, `vr`, `ar` | auto | Display mode selection |
| `scale` | 0.05 – 5.0 | 0.15 | World scale factor. Try `scale=1.0` to feel tiny! In VR, table becomes floor at scale < 0.5 |
| `env` | `forest`, `night`, `room`, `astro`, `square` | `forest` | Environment/skybox selection |
| `pbr` | `true`, `false` | `false` | Use PBR materials for better post textures (reduces performance) |
| `lens` | `true`, `all`, `false` | `false` | Realistic lens rendering. `all` includes all meshes in lens effects (premium feature) |
| `fps` | `true`, `false` | `false` | Show FPS counter in top-right corner |
| `safety` | `true`, `false` | `true` | Enable camera reset on laser collision |
| `sides` | `true`, `false` | `true` | Show/hide lens side surfaces. `false` improves performance |
| `teleport` | `true`, `false`, `off` | `off` | VR movement: `true`=teleport, `false`=walk, `off`=no movement (beginner-friendly) |
| `language` | `de`, `en`, `no` | `de` | Game language (German, English, Norwegian) |
| `user` | string | none | Player username for leaderboard |
| `level` | integer | 1 | Starting level number |
| `levels` | URL | internal | Load custom levels from external URL |
| `setpw` | password | none | Set interference premium password automatically |

**Examples:**
- `?mode=vr&scale=0.3&env=room&user=test` - VR mode with test user
- `?lens=all&pbr=true&fps=true` - Maximum quality rendering with FPS display
- `?teleport=off&language=en` - No movement, English interface  
- `?levels=https://example.com/levels&user=fred` - Custom level source

Combine parameters with `&`: `?mode=ar&scale=1.0&env=forest&user=myname`

## Language & Localization

The game supports multiple languages, which can be selected via URL parameter or in the settings menu:
- `language=de`: German (default)
- `language=en`: English  
- `language=no`: Norwegian

Example: `?language=en`

## Premium Features Password

If you have purchased the premium license, you can activate interference features directly via URL:
- `setpw=yourpassword`: Sets the interference password automatically on startup

Example: `?setpw=yourpassword`

Alternatively, use the "Password" button in the settings menu during gameplay.

## Difficulty Settings

The difficulty level affects scoring calculations. Currently accessible via the settings menu in-game:
- **Hard**: Normal scoring (relative_difficulty = 1.0)
- **Normal**: Reduced scoring threshold (relative_difficulty = 0.8)
- **Easy**: Further reduced scoring threshold (relative_difficulty = 0.5)

The control sensitivity can also be adjusted in the settings menu with three levels: Coarse, Medium, and Fine.

## License

Currently the software is reased under the [Commons Attribution-NonCommercial-NoDerivs}(https://creativecommons.org/licenses/by-nc-nd/4.0/) (CC-BY-NC-ND) License.
Classical geometrical optics alignment can currently be used free of charge. For interference-based feature support (Mach-Zehnder, Michelson, Shear-Plates) and more realistic lens-rendering, please contact the author (Rainer Heintzmann) using his surname at gmail.com.
