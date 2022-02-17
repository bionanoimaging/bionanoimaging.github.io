# nanoimaging.de


This webpage is based on [Jekyll](https://jekyllrb.com/) a very popular static website generator.
The main theme is [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes).


## Installation (Linux)

Install:
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

Put the following lines in your `~/.bashrc` or `~/.zshrc`:
```bash
# Install Ruby Gems to ~/gems' >> ~/.bashrc
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"
```
and call `soure ~/.zshrc`.

Then install Jekyll with
```bash
gem install jekyll bundler
```

For installation of the theme, see [here](https://github.com/mmistakes/minimal-mistakes#gem-based-method)
