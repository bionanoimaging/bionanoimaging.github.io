# nanoimaging.de


This webpage is based on [Jekyll](https://jekyllrb.com/), a very popular static website generator.
The main theme is [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes).
We use [GitHub Actions](https://jekyllrb.com/docs/continuous-integration/github-actions/) to automagically build the webpage.
The output is a static webpage which is hosted at GitHub. The domain `nanoimaging.de` just points to the IP adress of the webpage.
Hosted still [here](https://bionanoimaging.github.io).

## A few notes for maintaining
* Pictures of people exactly the size of 300px * 300px! Activate .jpg compression on a moderate leve.
* Please check always locally if the webpage still builds!
* Don't add pictures >1MB to git. In general don't update binary files (such as images, PDF, ...) too often.
* Update [_data/authors.yaml](_data/authors.yaml) if you want to add a new person. Old persons should be set to `active : false`.
* For posts, generate a file in the same date format as [_posts/2022-02-17-DeconvOptim.md](_posts/2022-02-17-DeconvOptim.md). Data for posts belongs in [assets/posts/](assets/posts/). I would recommend to simply copy it.


## Hosting for Development
Navigate to the folder and then call:
```
bundle exec jekyll serve
```

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
and call `source ~/.zshrc`.

Then install Jekyll with
```bash
gem install jekyll bundler
```

For installation of the theme, see [here](https://github.com/mmistakes/minimal-mistakes#gem-based-method)


## Theme
In general we install the theme independently, however some files in `_includes` or `_layout` are changed and hence
we copied our version to that location. That overrides the default templates.
