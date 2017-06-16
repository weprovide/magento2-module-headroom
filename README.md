# Magento2 Module Headroom

data-mage-init integration for Headroom.js

## Installation

1. `composer require weprovide/magento2-module-headroom`
2. `bin/magento setup:upgrade`

## Usage example

```html
<script type="text/x-magento-init">
  {
    ".page-header": {
      "WeProvide_Headroom/headroom": {
         "classes": {
             "initial": "animated",
             "pinned": "slideDown",
             "unpinned": "slideUp"
         }
       }
    }
  }
</script>
```

### Programmatic API

```js
define(['WeProvide_Headroom/headroom'], function (headroom) {
  // Headroom configuration. See http://wicky.nillia.ms/headroom.js for all options
  var configuration = {
    classes: {
      initial: 'animated',
      pinned: 'slideDown',
      unpinned: 'slideUp'
    }
  }

  // Element to intialize Headroom on.
  var element = document.querySelector("header")

  var instance = headroom(configuration, element)

  // Dynamically update options after initializing
  instance.classes.pinned = 'slideDown-new'
});
```

### Using Headroom.js directly

```js
define(['headroom'], function (Headroom) {
  // Headroom configuration. See http://wicky.nillia.ms/headroom.js for all options
  var configuration = {}

  // Element to intialize Headroom on.
  var element = document.querySelector("header")

  var instance = new Headroom(element, configuration)

  instance.init()
});
```
