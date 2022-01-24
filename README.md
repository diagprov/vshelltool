
# VShellTool

This is a gnome shell extension for any and all needs I may have.
Its primary purpose is to export D-Bus methods in order to 
allow me to script certain behaviours.

## UnsafeMode

Zoom sucks, but for screen sharing to work the 'non-solution' is to 
use

```
global.context.unsafe_mode=false
```

in Gnome's Looking Glass.

The `UnsafeMode` method simply wraps this and can be invoked as follows:

```
gdbus call --session --dest org.gnome.Shell --object-path "/ch/vennard/gnomeshell/tool" --method ch.vennard.gnomeshell.tool.UnsafeMode false
```

Which means you can toggle this switch without needing Looking Glass.

