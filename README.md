# Material Design Icons

[![Build Status](https://travis-ci.org/johnotander/ember-cli-material-design-icons.svg?branch=master)](https://travis-ci.org/johnotander/ember-cli-material-design-icons)

This is an [ember-cli](http://ember-cli.com) wrapper for
[Google's material design icons library](https://github.com/google/material-design-icons).

_Note:_ This addon currently uses an unofficial font graciously open-sourced at <http://zavoloklom.github.io/material-design-iconic-font/>.
Once there's an official icon font, it will be utilized instead.

## Installation

```
npm install --save ember-cli-material-design-icons
ember g ember-cli-material-design-icons
```

## Usage

```hbs
{{material-design-icon name='chat'}}
{{material-design-icon name='devices' size='lg'}}
{{material-design-icon name='attach-file' size='5x' iconClass='some-additional-class'}}
```

## License

All icons are released under an [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/) license by Google.

All Ember CLI addon code is released under [Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/) by John Otander

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
