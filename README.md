# davwheat Ad Units

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/davwheat/flarum-ext-ads.svg)](https://packagist.org/packages/davwheat/flarum-ext-ads) [![Total Downloads](https://img.shields.io/packagist/dt/davwheat/flarum-ext-ads.svg)](https://packagist.org/packages/davwheat/flarum-ext-ads) ![](https://flarum-badge-api.davwheat.dev/v1/compat-latest/davwheat/flarum-ext-ads)

A [Flarum](http://flarum.org) extension that provides ad unit support for your Flarum forum.


## ⚠️ Fork 🧑‍🌾

This is a fork of the [original extension by David Wheatley](https://github.com/davwheat/flarum-ext-ads) with some 
very special changes required for a customer. This fork is not intended for public usage.

## Special thanks

Thank you to @"alphadot"#36731 and @"MikeJones"#17198 for sponsoring this extension! 🥰 

## Installation

Install with composer:

```sh
composer require mediaconstructor/flarum-ext-ads:"*"
```

## Updating

```sh
composer update mediaconstructor/flarum-ext-ads:"*"
php flarum migrate
php flarum cache:clear
```

## Usage

Head to your admin dashboard and enable the extension. Switch on the Ad Unit locations you'd like, then paste your ad code in the textboxes below.

If you use "between post" ads, make sure to configure the gap between ads in the extension settings page.

> ⚠️ **If you use Google AdSense**, only insert the `<ins>` tag into the textbox.


> ⚠️ The text boxes **do not** support `<script>` tags. These scripts will not be executed if you enter them into the text boxes, due to how Mithril functions.

## Links

- [Packagist](https://packagist.org/packages/davwheat/flarum-ext-ads)
- [GitHub](https://github.com/davwheat/flarum-ext-ads)
- [Discuss](https://discuss.flarum.org/d/28506)
