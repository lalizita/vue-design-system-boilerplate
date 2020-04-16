# vue-design-system-boilerplate

This is a simple setup of a design system to link your own components in another project.
This project contains

- Tailwind css
- Storybook

First, you need to build the project:

```
npm run build-bundle
```

Link:

```
npm link
```

To link it in another vue project you config symlink in your webpack [look this issue](https://github.com/vuejs/vue-cli/issues/1494)

```
//vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
    },
  },
};

```

```
npm link vue-design-system-boilerplate
```

Make a little configuration in you root Vue file, to register the ib components

```
import vueDesignSytem from "vue-design-system-boilerplate";


Object.keys(vueDesignSytem).forEach((name) => {
  Vue.component(name, vueDesignSytem[name]);
});
```

have fun!
