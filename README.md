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